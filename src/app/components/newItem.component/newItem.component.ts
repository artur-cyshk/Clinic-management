import { Component, Output, Input, EventEmitter } from '@angular/core';
import { HelperService } from '../../services/helper.service';


@Component({
  selector: 'app-new-item',
  templateUrl: './newItem.component.html',
  styleUrls: ['./newItem.component.css']
})
export class NewItemComponent {

	@Output() newItemAdded: EventEmitter<any> = new EventEmitter<any>();
	@Input() iconClassName: string;
	@Input() topicName: string;
	newItemValue: string;

	constructor(private helperService: HelperService) { }

	addItem(): void {
		if (this.newItemValue) {
			this.newItemAdded.emit({
				name: this.newItemValue,
				id: this.helperService.generateGuid()
			});
			this.newItemValue = '';
		}
	}
}
