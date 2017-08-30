import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { LocalStorageService } from './localStorage.service';

import * as therapists from '../data/patients.json';



@Injectable()
export class PatientService {

	// constructor(private localStorageService: LocalStorageService) {}

	// getData(fieldName, field) {
	// 	return Observable.of(this.localStorageService.getItem(fieldName) || field['data']);
	// }

	// getTherapists() {
	// 	return this.getData('therapists', therapists);
	// }
}
