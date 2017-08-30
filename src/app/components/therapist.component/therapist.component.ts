import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Therapist } from '../../models';


@Component({
  selector: 'app-therapist',
  templateUrl: './therapist.component.html',
  styleUrls: ['./therapist.component.css']
})
export class TherapistComponent {

	@Output() onTherapistRemoved: EventEmitter<any> = new EventEmitter<any>();
	@Output() onTherapistEdited: EventEmitter<any> = new EventEmitter<any>();
	@Input() therapist: Therapist;

	removeTherapist(id: string): void {
		this.onTherapistRemoved.emit(id);
	}

	editTherapist(editedTherapist: Therapist): void {
		this.onTherapistEdited.emit(editedTherapist);
	}

	changeClinicStatus($event): void {
		if (!$event.linkStatus) {
			this.therapist.clinicsIds.push($event.itemId);
		} else {
			this.therapist.clinicsIds = this.therapist.clinicsIds.filter(item => item !== $event.itemId);
		}
		this.editTherapist(this.therapist);
	}
}
