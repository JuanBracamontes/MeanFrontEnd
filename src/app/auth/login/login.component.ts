import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { LoginForm } from 'src/app/interfaces/auth/login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  inputType: string = 'password';
  loginForm: FormGroup;

  constructor(
    private formBuilder: RxFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.formGroup(LoginForm);
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((response) => {
        if (response.ok) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        }
      });
    }
  }

  changeInputType() {
    this.inputType = this.inputType == 'text' ? 'password' : 'text';
  }
}
