import { email, prop, required } from '@rxweb/reactive-form-validators';

export class HospitalForm {
  @prop()
  @required()
  phone: string = '';
  @prop()
  @required()
  name: string = '';
  @prop()
  @required()
  address: string = '';
  // @prop()
  // postcode: string = '';
  // @prop()
  // @required()
  // city: string = '';
  // @prop()
  // neighbourhood: string = '';
}
