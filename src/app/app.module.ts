import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  AppComponent,
  WorkflowComponent,
  ClinicsComponent,
  PatientsComponent,
  TherapistsComponent,
  NavigateComponent
} from './components';

import {
  LocalStorageService,
  ClinicService,
  PatientService,
  TherapistService
} from './services';
import { router } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent,
    ClinicsComponent,
    PatientsComponent,
    TherapistsComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    LocalStorageService,
    ClinicService,
    PatientService,
    TherapistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
