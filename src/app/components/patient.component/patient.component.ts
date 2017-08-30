import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Patient } from '../../models';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

	@Output() onPatientRemoved: EventEmitter<any> = new EventEmitter<any>();
	@Output() onPatientEdited: EventEmitter<any> = new EventEmitter<any>();
	@Input() patient: Patient;

	removePatient(id: string): void {
		this.onPatientRemoved.emit(id);
	}

	editPatient(editedPatient: Patient): void {
		this.onPatientEdited.emit(editedPatient);
	}

	changeIdsStatus(field, $event): void {
		if (!$event.linkStatus) {
			this.patient[field].push($event.itemId);
		} else {
			this.patient[field] = this.patient[field].filter(item => item !== $event.itemId);
		}
		this.editPatient(this.patient);
	}

	changeClinicStatus($event) {
		return this.changeIdsStatus('clinicsIds', $event);
	}

	changeTherapistStatus($event) {
		return this.changeIdsStatus('therapistsIds', $event);
	}
}
