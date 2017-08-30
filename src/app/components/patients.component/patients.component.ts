import { Component } from '@angular/core';

import { PatientService } from '../../services';
import { Patient } from '../../models';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {

	constructor(private patientService: PatientService) { }

	addNewPatient(newPatient: { id: string, name: string }): void {
		this.patientService.add(newPatient);
	}

	removePatient(id: string): void {
		this.patientService.remove(id);
	}

	editPatient(editedPatient: Patient): void {
		this.patientService.edit(editedPatient);
	}
}

