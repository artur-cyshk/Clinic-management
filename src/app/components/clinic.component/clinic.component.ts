import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Clinic } from '../../models';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent {

	@Output() onClinicRemoved: EventEmitter<any> = new EventEmitter<any>();
	@Output() onClinicEdited: EventEmitter<any> = new EventEmitter<any>();
	@Input() clinic: Clinic;

	removeClinic(id: string): void {
		this.onClinicRemoved.emit(id);
	}

	editClinic(editedClinic: Clinic): void {
		this.onClinicEdited.emit(editedClinic);
	}
}
