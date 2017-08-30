import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  AppComponent,
  WorkflowComponent,
  ClinicComponent,
  ClinicsComponent,
  LinkedItemsComponent,
  PatientComponent,
  PatientsComponent,
  TherapistComponent,
  TherapistsComponent,
  NavigateComponent,
  NewItemComponent,
  EditItemComponent
} from './components';

import {
  LocalStorageService,
  ClinicService,
  PatientService,
  TherapistService,
  HelperService
} from './services';
import { router } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent,
    ClinicComponent,
    ClinicsComponent,
    PatientComponent,
    PatientsComponent,
    TherapistComponent,
    TherapistsComponent,
    NavigateComponent,
    NewItemComponent,
    EditItemComponent,
    LinkedItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    LocalStorageService,
    ClinicService,
    PatientService,
    TherapistService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
