import { prop, required } from '@rxweb/reactive-form-validators';
import { LoginForm } from './auth/login';

export class RegisterForm extends LoginForm {
  @prop()
  @required()
  confirmPassword: string = '';
  @prop()
  @required()
  userName: string = '';
}
