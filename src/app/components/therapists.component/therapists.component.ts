import { Component } from '@angular/core';

import { TherapistService } from '../../services';
import { Therapist } from '../../models';


@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrls: ['./therapists.component.css']
})
export class TherapistsComponent {
	
	constructor(private therapistService: TherapistService) { }

	addNewTherapist(newTherapist: { id: string, name: string }): void {
		this.therapistService.add(newTherapist);
	}

	removeTherapist(id: string): void {
		this.therapistService.remove(id);
	}

	editTherapist(editedTherapist: Therapist): void {
		this.therapistService.edit(editedTherapist);
	}
}
