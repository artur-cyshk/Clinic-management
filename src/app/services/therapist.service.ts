import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from './localStorage.service';

import * as therapists from '../data/therapists.json';
import { Therapist } from '../models';


@Injectable()
export class TherapistService {

  private therapistsList: Therapist[] = this.localStorageService.getItem('therapists') || therapists['data'];
  private observableListSubject: BehaviorSubject<Therapist[]> = new BehaviorSubject(this.therapistsList);

  get observableList(): Observable<Therapist[]> {
  	return this.observableListSubject.asObservable();
  }

  constructor(private localStorageService: LocalStorageService) {}

  add(therapist: { id: string, name: string }): void {
    this.therapistsList.push({ ...therapist, clinicsIds: new Array<string>() });
    this.localStorageService.setItem('therapists', this.therapistsList);
    this.observableListSubject.next(this.therapistsList);
  }

  remove(id: string): void {
  	this.therapistsList = this.therapistsList.filter(therapist => therapist.id !== id);
  	this.localStorageService.setItem('therapists', this.therapistsList);
  	this.observableListSubject.next(this.therapistsList);
  }

  edit(editedTherapist: Therapist): void {
    const therapist = this.therapistsList.find(therapist => therapist.id === editedTherapist.id);
    therapist.name = editedTherapist.name;
    this.localStorageService.setItem('therapists', this.therapistsList);
    this.observableListSubject.next(this.therapistsList);
  }

  removeClinicFromAllTherapists(clinicId: string): void {
    this.therapistsList = this.therapistsList.map(therapist => {
      therapist.clinicsIds = therapist.clinicsIds.filter(id => clinicId !== id);
      return therapist;
    });
    this.localStorageService.setItem('therapists', this.therapistsList);
    this.observableListSubject.next(this.therapistsList);
  }  
}
