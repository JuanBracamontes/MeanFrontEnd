import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { RegisterForm } from 'src/app/interfaces/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  inputType: string = 'password';
  registerForm: FormGroup;

  constructor(private formBuilder: RxFormBuilder) {
    this.registerForm = this.formBuilder.formGroup(RegisterForm);
  }

  login() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

  changeInputType() {
    this.inputType = this.inputType == 'text' ? 'password' : 'text';
  }
}
