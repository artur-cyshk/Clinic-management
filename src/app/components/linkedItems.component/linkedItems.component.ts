import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ClinicService, TherapistService } from '../../services';


@Component({
  selector: 'app-linked-items',
  templateUrl: './linkedItems.component.html',
  styleUrls: ['./linkedItems.component.css'],
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
export class LinkedItemsComponent implements OnInit {

	@Input() linkedIds: Array<string>;
  @Input() currentType: string;
	@Output() itemStatusChanged: EventEmitter<any> = new EventEmitter<any>();
  private currentService;

	constructor(private clinicService: ClinicService, private therapistService: TherapistService ) { }

  ngOnInit() {
    switch (this.currentType) {
      case 'clinic':
        this.currentService = this.clinicService;
        break;
      case 'therapist':
        this.currentService = this.therapistService;
        break;
    }
  }

	linkItem(itemId: string, linkStatus: boolean): void {
		this.itemStatusChanged.emit({itemId, linkStatus});
	}

	isItemLinked(itemId: string): boolean {
		return (this.linkedIds || []).includes(itemId);
	}
}
