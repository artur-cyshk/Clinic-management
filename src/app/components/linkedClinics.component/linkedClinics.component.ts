import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ClinicService } from '../../services';


@Component({
  selector: 'app-linked-clinics',
  templateUrl: './linkedClinics.component.html',
  styleUrls: ['./linkedClinics.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateY(-100%)' }),
          animate('500ms', style({ transform: 'translateY(0)' }))
        ]),
        transition(':leave', [
          style({ transform: 'translateY(0)' }),
          animate('500ms', style({ transform: 'translateY(-100%)' }))
        ])
      ]
    )
  ],
})
export class LinkedClinicsComponent {

	@Input() linkedClinicsIds: Array<string>;
	@Output() clinicStatusChanged: EventEmitter<any> = new EventEmitter<any>();

	constructor(private clinicService: ClinicService) { }

	linkClinic(clinicId: string, linkStatus: boolean): void {
		this.clinicStatusChanged.emit({clinicId, linkStatus});
	}

	isClinicLinked(clinicId: string): boolean {
		return (this.linkedClinicsIds || []).includes(clinicId);
	}
}
