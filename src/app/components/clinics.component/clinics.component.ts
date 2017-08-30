import { Component } from '@angular/core';

import { ClinicService } from '../../services';


@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent {

	constructor(private clinicService: ClinicService) {}

	addNewClinic(name: string): void {
		this.clinicService.add({name: name, id: '20'});
	}

}
