import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private items:Array<string> = [];

  constructor() {
    this.items = ["Colombia", "Costa Rica", "Germany", "Japan", "Spain"]
  }

  getItems():Array<string>{
    return this.items;
  }

  get(index):string{
    return this.items[index];
  }
}
