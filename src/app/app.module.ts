import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './angular-material-components/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteoffDirective } from './directives/autocompleteoff.directive';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { DoctorsComponent } from './pages/home/doctors/doctors.component';
import { HospitalsComponent } from './pages/home/hospitals/hospitals.component';
import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
  provideNgxMask,
} from 'ngx-mask';
import { MedicinesComponent } from './pages/managment/medicines/medicines.component';
import { ManagmentComponent } from './pages/managment/managment.component';
import { LocationsComponent } from './pages/managment/locations/locations.component';
import { AgendaComponent } from './pages/managment/agenda/agenda.component';
import { LoaderComponent } from './shared/loader/loader.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    BreadcrumbComponent,
    DoctorsComponent,
    HospitalsComponent,
    MedicinesComponent,
    ManagmentComponent,
    LocationsComponent,
    AgendaComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RxReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideEnvironmentNgxMask(maskConfig)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
