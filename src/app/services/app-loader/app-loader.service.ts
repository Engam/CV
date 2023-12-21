import { Injectable } from '@angular/core';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AppLoaderService {

  constructor(
    private user: UserService,
  ) { }

  /**
   * Load the app
   * Lodes userdata
   * Lodes portifoilio
   */
  load() {
    console.log('app loader service loaded');
    this.loadUser();
    this.loadPortfolio()
  }


  private async loadUser():Promise<void> {
    this.user.load();
  }

  private async loadPortfolio():Promise<void> {
  }

}
