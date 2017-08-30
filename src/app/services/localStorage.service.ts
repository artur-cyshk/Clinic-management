import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

  private localStorage;

  constructor() {
    this.localStorage = localStorage;
  }

  setItem(key, value) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    const result = this.localStorage.getItem(key);
    return (result) ? JSON.parse(result) : null;
  }

  removeItem(key) {
    this.localStorage.removeItem(key);
  }
}
