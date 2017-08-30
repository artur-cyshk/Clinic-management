import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { LocalStorageService } from './localStorage.service';

import * as patients from '../data/patients.json';



@Injectable()
export class TherapistService {

	// constructor(private localStorageService: LocalStorageService) {}

	// getData(fieldName, field) {
	// 	return Observable.of(this.localStorageService.getItem(fieldName) || field['data']);
	// }


	// getPatients() {
	// 	return this.getData('patients', patients);
	// }
}
