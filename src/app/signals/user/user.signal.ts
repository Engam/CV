import { Injectable } from '@angular/core';
import { StateService } from '../state/state.service';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserSignal extends StateService<User> {

  constructor() {
    super();

    setTimeout(() => {

    },200)
  }

}
