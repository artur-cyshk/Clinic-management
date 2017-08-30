import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-edit-item',
  templateUrl: './editItem.component.html',
  styleUrls: ['./editItem.component.css']
})
export class EditItemComponent {
	@Output() itemEditted: EventEmitter<any> = new EventEmitter<any>();
	@Input() iconClassName: string;
	@Input() topicName: string;
	@Input() item: any;

	private initialName: string;
	isEditing: boolean;

	cancelEditing(): void {
		this.item.name = this.initialName;
		this.isEditing = false;
	}

	acceptEditing(): void {
		this.itemEditted.emit(this.item);
		this.isEditing = false;
	}

	startEditing(): void {
		this.initialName = this.item.name;
		this.isEditing = true;
	}
}
