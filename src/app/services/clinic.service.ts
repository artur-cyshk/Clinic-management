import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { TherapistService } from './therapist.service';
import { PatientService } from './patient.service';
import { LocalStorageService } from './localStorage.service';

import * as clinics from '../data/clinics.json';
import { Clinic } from '../models';


@Injectable()
export class ClinicService {

  private clinicsList: Clinic[] = this.localStorageService.getItem('clinics') || clinics['data'];
  private observableListSubject: BehaviorSubject<Clinic[]> = new BehaviorSubject(this.clinicsList);

  get observableList(): Observable<Clinic[]> { return this.observableListSubject.asObservable(); }

  constructor(
    private localStorageService: LocalStorageService,
    private therapistService: TherapistService,
    private patientService: PatientService) {}

  private saveAndResponseClinics(clinicsList: Clinic[]): void {
    this.localStorageService.setItem('clinics', clinicsList);
    this.observableListSubject.next(clinicsList);
  }

  add(clinic: Clinic): void {
    this.clinicsList.push(clinic);
    this.saveAndResponseClinics(this.clinicsList);
  }

  remove(id: string): void {
  	this.clinicsList = this.clinicsList.filter(clinic => clinic.id !== id);
    this.therapistService.removeClinicFromAllTherapists(id);
    this.patientService.removeClinicFromAllPatients(id);
  	this.saveAndResponseClinics(this.clinicsList);
  }

  edit(editedClinic: Clinic): void {
    const clinic = this.clinicsList.find(clinic => clinic.id === editedClinic.id);
    clinic.name = editedClinic.name;
    this.saveAndResponseClinics(this.clinicsList);
  }
}
