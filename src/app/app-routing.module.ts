import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorsComponent } from './pages/home/doctors/doctors.component';
import { HospitalsComponent } from './pages/home/hospitals/hospitals.component';
import { MedicinesComponent } from './pages/managment/medicines/medicines.component';
import { LocationsComponent } from './pages/managment/locations/locations.component';
import { AgendaComponent } from './pages/managment/agenda/agenda.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   pathMatch: 'full',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'doctors',
  //       component: DoctorsComponent,
  //       data: {
  //         breadcrumb: 'Doctors',
  //       },
  //     },
  //   ],
  //   data: {
  //     breadcrumb: 'Home',
  //   },
  // },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: [{ label: 'Home', link: 'home' }],
    },
    children: [
      {
        path: 'doctors',
        component: DoctorsComponent,
        data: {
          breadcrumb: [
            { label: 'Home', link: 'home' },
            { label: 'Doctors', link: 'home/doctors' },
          ],
        },
      },
      {
        path: 'hospitals',
        component: HospitalsComponent,
        data: {
          breadcrumb: [
            { label: 'Home', link: 'home' },
            { label: 'Hospitals', link: 'home/hospitals' },
          ],
        },
      },
    ],
  },
  {
    path: 'managment',
    component: HomeComponent,
    data: {
      breadcrumb: [{ label: 'Managment', link: 'managment' }],
    },
    children: [
      {
        path: 'medicines',
        component: MedicinesComponent,
        data: {
          breadcrumb: [
            { label: 'Managment', link: 'managment' },
            { label: 'Medicines', link: 'managment/medicines' },
          ],
        },
      },
      {
        path: 'locations',
        component: LocationsComponent,
        data: {
          breadcrumb: [
            { label: 'Managment', link: 'managment' },
            { label: 'Locations', link: 'managment/locations' },
          ],
        },
      },
      {
        path: 'agenda',
        component: AgendaComponent,
        data: {
          breadcrumb: [
            { label: 'Managment', link: 'managment' },
            { label: 'Agenda', link: 'managment/agenda' },
          ],
        },
      },
    ],
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    data: {
      breadcrumb: [{ label: 'Dashboard', link: 'dashboard' }],
    },
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/auth/auth.module').then((x) => x.AuthModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
