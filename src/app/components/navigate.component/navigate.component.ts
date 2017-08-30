import { Component } from '@angular/core';
import { LocalStorageService } from '../../services';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent {
	
	private _isPanelExpanded: boolean = !!this.localStorageService.getItem('isPanelExpanded');

	get isPanelExpanded(): boolean {
		return this._isPanelExpanded;
	}

	set isPanelExpanded(value: boolean) {
		this._isPanelExpanded = value;
		this.localStorageService.setItem('isPanelExpanded', this._isPanelExpanded);
	}

	routes: any = [
    {
     	 name: 'clinics',
       route: 'clinics',
       icon: 'fa-building-o'
	  },
	  {
			 name: 'Therapists',
			 route: 'therapists',
			 icon: 'fa-user-md'
		},
	  {
	  	 name: 'Patients',
	  	 route: 'patients',
       icon: 'fa-address-card-o'
	  }
	];

	constructor(private localStorageService: LocalStorageService) { }

}
