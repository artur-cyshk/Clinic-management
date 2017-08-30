import { Component } from '@angular/core';

import { ClinicService } from '../../services';
import { Clinic } from '../../models';


@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent {

	constructor(private clinicService: ClinicService) { }

	addNewClinic(newClinic: Clinic): void {
		this.clinicService.add(newClinic);
	}

	removeClinic(id: string): void {
		this.clinicService.remove(id);
	}

	editClinic(editedClinic: Clinic): void {
		this.clinicService.edit(editedClinic);
	}
}
