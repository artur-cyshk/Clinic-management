import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from './localStorage.service';
import { PatientService } from './patient.service';

import * as therapists from '../data/therapists.json';
import { Therapist } from '../models';


@Injectable()
export class TherapistService {

  private therapistsList: Therapist[] = this.localStorageService.getItem('therapists') || therapists['data'];
  private observableListSubject: BehaviorSubject<Therapist[]> = new BehaviorSubject(this.therapistsList);

  get observableList(): Observable<Therapist[]> {
  	return this.observableListSubject.asObservable();
  }

  constructor(private localStorageService: LocalStorageService, private patientService: PatientService) {}

  private saveAndResponseTherapists(therapistsList: Therapist[]): void {
    this.localStorageService.setItem('therapists', therapistsList);
    this.observableListSubject.next(therapistsList);
  }

  add(therapist: { id: string, name: string }): void {
    this.therapistsList.push({ ...therapist, clinicsIds: new Array<string>() });
    this.saveAndResponseTherapists(this.therapistsList);
  }

  remove(id: string): void {
  	this.therapistsList = this.therapistsList.filter(therapist => therapist.id !== id);
    this.patientService.removeTherapistFromAllPatients(id);
  	this.saveAndResponseTherapists(this.therapistsList);
  }

  edit(editedTherapist: Therapist): void {
    this.therapistsList.find(therapist => therapist.id === editedTherapist.id).name = editedTherapist.name;
    this.saveAndResponseTherapists(this.therapistsList);
  }

  removeClinicFromAllTherapists(clinicId: string): void {
    this.therapistsList = this.therapistsList.map(therapist => {
      therapist.clinicsIds = therapist.clinicsIds.filter(id => clinicId !== id);
      return therapist;
    });
    this.saveAndResponseTherapists(this.therapistsList);
  }
}
