import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private items$ = new Subject<any[]>();

  private items:Array<Object> = [];

  constructor() {
    this.items = [{
      id: '1',
      name: "Pedro",
      nationality: 'Colombian',
      birthday: '1983-05-18',
      photo: 'https://i.pinimg.com/originals/0c/76/69/0c76699604bb5fbc373c401496d82c79.jpg'
    }, {
      id: '2',
      name: "Pepe",
      nationality: 'Ecuatorian',
      birthday: '1975-09-28',
      photo: 'https://vz.cnwimg.com/thumbc-250x250/wp-content/uploads/2015/08/GettyImages-464337244.jpg'
    }, {
      id: '3',
      name: "Paco",
      nationality: 'Peruvian',
      birthday: '2002-08-08',
      photo: 'http://eldia.es/eldiaes/imagenes/2014/09/12/1410557503828x.jpg'
    }, {
      id: '4',
      name: "Rodolfo",
      nationality: 'Chilean',
      birthday: '1945-04-08',
      photo: 'http://images.yodibujo.es/_uploads/_tiny_galerie/20120102/johnnydepp_d5r.jpg'
    }, {
      id: '5',
      name: "Martina",
      nationality: 'Chinesse',
      birthday: '1973-12-17',
      photo: 'https://s.hswstatic.com/gif/celebrity-complexions-7.jpg'
    }
    ]
  }

  getItems():Array<Object>{
    return this.items;
  }

  get(index):Object{
    return this.items[index];
  }

  addItem(item){
    this.items.push(item);
    this.items$.next(this.items);
  }

  getItems$(): Observable<any[]>{
    return this.items$.asObservable();
  }


}
