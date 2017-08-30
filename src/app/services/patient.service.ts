import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from './localStorage.service';

import * as patients from '../data/patients.json';
import { Patient } from '../models';


@Injectable()
export class PatientService {

  private patientsList: Patient[] = this.localStorageService.getItem('patients') || patients['data'];
  private observableListSubject: BehaviorSubject<Patient[]> = new BehaviorSubject(this.patientsList);

  get observableList(): Observable<Patient[]> {
  	return this.observableListSubject.asObservable();
  }

  constructor(private localStorageService: LocalStorageService) {}

  private saveAndResponsePatients(patientsList: Patient[]): void {
  	this.localStorageService.setItem('patients', patientsList);
    this.observableListSubject.next(patientsList);
  }

  add(patient: { id: string, name: string }): void {
    this.patientsList.push({ ...patient, clinicsIds: new Array<string>(), therapistsIds: new Array<string>() });
    this.saveAndResponsePatients(this.patientsList);
  }

  remove(id: string): void {
  	this.patientsList = this.patientsList.filter(patient => patient.id !== id);
  	this.saveAndResponsePatients(this.patientsList);
  }

  edit(editedPatient: Patient): void {
    const patient = this.patientsList.find(patient => patient.id === editedPatient.id);
    patient.name = editedPatient.name;
    this.saveAndResponsePatients(this.patientsList);
  }

  private removeItemsFromAllPatients(field: string, itemId: string): Patient[] {
    return this.patientsList.map(patient => {
      patient[field] = patient[field].filter(id => itemId !== id);
      return patient;
    });
  }

  removeClinicFromAllPatients(clinicId: string): void {
    this.saveAndResponsePatients(this.removeItemsFromAllPatients('clinicsIds', clinicId));
  }  

  removeTherapistFromAllPatients(therapistId: string): void {
    this.saveAndResponsePatients(this.removeItemsFromAllPatients('therapistsIds', therapistId));
  } 
}
