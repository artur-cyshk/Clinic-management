import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from './localStorage.service';

import * as clinics from '../data/clinics.json';
import { Clinic } from '../models/Clinic';


@Injectable()
export class ClinicService {

  private clinicsList: Clinic[] = this.localStorageService.getItem('clinics') || clinics['data'];
  private observableListSubject: BehaviorSubject<Clinic[]> = new BehaviorSubject(this.clinicsList);

  get observableList(): Observable<Clinic[]> { return this.observableListSubject.asObservable(); }

  constructor(private localStorageService: LocalStorageService) {}

  add(clinic: Clinic): void {
    this.clinicsList.push(clinic);
    this.localStorageService.setItem('clinics', this.clinicsList);
    this.observableListSubject.next(this.clinicsList);
  }
}
