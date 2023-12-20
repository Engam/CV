import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppLoaderService {

  constructor() { }

  load() {
    console.log('app loader service loaded');
  }

  /**
   * Load user data
   * @returns void
   * @memberof AppLoaderService
   */
  async loadUser():Promise<void> {

  }
}
