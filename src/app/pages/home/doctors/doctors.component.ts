import { Component } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';
interface IHospital {
  id: string;
  name: string;
  umf: number;
}
interface IArea {
  id: string;
  name: string;
}
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent {
  selectedValueHospital: string = '';
  selectedValueArea: string = '';
  constructor(private loaderService: LoaderService) {
    // this.loaderService.changeLoaderStatus(true);
    // setTimeout(() => {
    //   this.loaderService.changeLoaderStatus(false);
    // }, 2000);
  }

  hospitals: IHospital[] = [
    { id: '5b328e58-5744-4a60-bda8-100e23fc7a05', name: 'IMSS 14', umf: 14 },
    {
      id: '9e60c4bb-3c0b-4c66-bc02-8d71215c7f92',
      name: 'IMSS Juarez',
      umf: 14,
    },
    { id: '5cc61af7-87bb-4406-8859-db6a3e908662', name: 'IMSS 37', umf: 37 },
  ];
  areas: IArea[] = [
    { id: 'd849c332-030e-4b48-92d1-4ab3e06a3ccc', name: 'Pedeatría' },
    {
      id: '99435e81-e32c-4009-893b-aa396bc169d0',
      name: 'Ginecología',
    },
    { id: '5cc61af7-87bb-4406-8859-db6a3e908662', name: 'Ortopedia' },
    {
      id: '6e734843-24fb-40e0-a764-13eba3103946',
      name: 'Unidad de cuidados intensivos',
    },
    { id: 'c89afe88-7c11-45fd-9f72-0d8f8e23b9fd', name: 'Medicina Fisica' },
  ];
}
