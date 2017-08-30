import { Routes } from '@angular/router';
import { ClinicsComponent, PatientsComponent, TherapistsComponent } from './components';


export const router: Routes = [
	{
		path: 'clinics',
		component: ClinicsComponent
	},
	{
		path: 'patients',
		component: PatientsComponent
	},
	{
		path: 'therapists',
		component: TherapistsComponent
	},
	{
		path: '',
		redirectTo: '/clinics',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/clinics',
		pathMatch: 'full'
	}
];
