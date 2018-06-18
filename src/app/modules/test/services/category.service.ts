import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private items:Array<string> = [];

  constructor() {
    this.items = ["Drama", "Thriller", "Terror", "Action", "Suspense"]
  }

  getItems():Array<string>{
    return this.items;
  }

  get(index):string{
    return this.items[index];
  }
}
