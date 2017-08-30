import { Component } from '@angular/core';


@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent {
  routes: any = [
    {
     	 name: 'clinics',
       route: 'clinics',
       icon: 'fa-building-o'
	  },
	  {
	  	 name: 'Patients',
	  	 route: 'patients',
       icon: 'fa-address-card-o'
	  },
		{
			 name: 'Therapists',
			 route: 'therapists',
			 icon: 'fa-user-md'
		}
	];
}
