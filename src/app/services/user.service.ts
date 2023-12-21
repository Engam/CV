import { Injectable } from '@angular/core';
import { UserSignal } from '../signals/user/user.signal';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private signal: UserSignal
  ) { }

  /**
   * Initially load the user
  */
  async load() {
    const user = await this.loadUser();
    console.log("USER: ", user)
    this.signal.setState(user);
    console.log("USERSERVICE: ", this.signal.get())
  }

  private async loadUser():Promise<User> {
    const user:User = {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@test.com',
      github: 'https://github.com/Engam',
      id: '1',
      image: 'https://avatars.githubusercontent.com/u/1024025?v=4',
      phone: '+49 123 456 789',
    }
    return user
  }


}
