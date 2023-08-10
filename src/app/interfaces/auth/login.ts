import { email, prop, required } from '@rxweb/reactive-form-validators';

export class LoginForm {
  @prop()
  @required()
  @email()
  email: string = '';
  @prop()
  @required()
  password: string = '';
}
