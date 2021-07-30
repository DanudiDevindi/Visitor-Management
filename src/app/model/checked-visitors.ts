import {Visitors} from './visitors';
import {User} from './user';
import {Floor} from './floor';
import {PassCard} from './pass-card';
import {Employee} from './employee';

export class CheckedVisitors {
  visitId : number;
  visitor : Visitors;
  checkInTime : string;
  checkOutTime : string;
  purpose : string;
  checkInUser : User;
  checkOutUser : User;
  floor : Floor;
  passCard : PassCard;
  employee : Employee;
}
