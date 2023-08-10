import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {
  Observable,
  debounce,
  debounceTime,
  filter,
  from,
  map,
  startWith,
} from 'rxjs';
import { HospitalForm } from 'src/app/interfaces/hospitals/hospital';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { HospitalService } from '../../services/hospital.service';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  autocompleteInput = new FormControl<any>('');
  filteredOptions: Observable<any[]> | undefined;
  options: any[] = [];
  hospitalForm: FormGroup;
  addressProperties: object = {};

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'getdetails',
  ];

  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  constructor(
    private http: HttpClient,
    private formBuilder: RxFormBuilder,
    private loaderService: LoaderService,
    private hospitalService: HospitalService
  ) {
    this.hospitalForm = this.formBuilder.formGroup(HospitalForm);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.autocompleteInput.valueChanges
      .pipe(
        debounceTime(500),
        startWith(''),
        map((value) => this.searchAddress(value as string))
      )
      .subscribe();

    this.getHospitalsData();
  }

  getHospitalsData() {
    this.hospitalService.getHospitals().subscribe((response) => {
      console.log(response);
    });
  }

  save() {
    this.setAddress();
    if (this.hospitalForm.valid) {
      let values = Object.assign(
        this.addressProperties,
        this.hospitalForm.value
      );
      this.loaderService.changeLoaderStatusTo(true);
      this.hospitalService.createHospital(values).subscribe((response) => {
        this.loaderService.changeLoaderStatusTo(false);
        this.resetForm();
        Swal.fire(
          'Hospital saved!',
          `Now ${values.name} is available`,
          'success'
        );
      });
    }
  }

  resetForm() {
    this.hospitalForm.reset();
    Object.keys(this.hospitalForm.controls).forEach((key) => {
      this.hospitalForm.get(key)!.setErrors(null);
    });
    this.autocompleteInput.setValue('');
    this.options = [];
  }

  setAddress() {
    let addressValues = this.autocompleteInput.value;
    this.addressProperties = {
      city: addressValues.address.city,
      postcode: addressValues.address.postcode,
      neighbourhood: addressValues.address.neighbourhood,
    };
    this.hospitalForm.controls['address'].setValue(
      this.autocompleteInput.value
        ? this.autocompleteInput.value.display_name
        : ''
    );
    console.log(this.hospitalForm);
  }

  resetAutocomplete() {
    this.options = [];
    this.autocompleteInput.setValue('');
    this.hospitalForm.reset();
  }

  displayFn(address: any): string {
    return address && address.display_name ? address.display_name : '';
  }

  searchAddress(keyword: string) {
    let requestUrl: string = `https://nominatim.openstreetmap.org/search?q=${keyword}&format=geojson&polygon_geojson=1&addressdetails=1`;
    this.http.get(requestUrl).subscribe((response: any) => {
      this.options = response.features
        //.filter((x: any) => x.geometry.type == 'Point')
        .map((values: any) => {
          return values.properties;
        });
    });
  }

  getRecord(name: string) {
    alert(name);
  }
}
