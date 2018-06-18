import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private items:any[] = [];

  constructor() {
    this.items = [
      {
        name: "movie 1",
        url: "https://i.pinimg.com/originals/b4/ae/59/b4ae599fac5890f391ad4e17b7d1e71e.jpg",
    }, {
      name: "movie 2",
      url: "https://i.pinimg.com/originals/2b/25/8a/2b258ae7c1306620e0ac2f2289b421cc.jpg",
  }, {
    name: "movie 3",
    url: "https://imagenesfotos.com/wp-content/2009/06/ardillas-32.jpg",
}, {
  name: "movie 4",
  url: "https://i.pinimg.com/originals/82/8f/75/828f75ba9edf256cbe24dcaf81812488.jpg",
}, {
  name: "movie 5",
  url: "https://i.pinimg.com/736x/ba/e0/46/bae04699f5445ef17f2bf9c71dc36ce9--animal-makeup-eastern-gray-squirrel.jpg",
}]
  }

  getItems():Array<string>{
    return this.items;
  }

  get(index):string{
    return this.items[index];
  }
}
