import { Component, OnInit } from '@angular/core';
import { ActorService } from '../modules/test/services/actor.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.scss']
})
export class TestObservablesComponent implements OnInit {

  private actors:any;
  private actors$:Observable<any>;

  constructor(private _actor_service:ActorService) { }

  ngOnInit() {
    this.actors = this._actor_service.getItems();
    this.actors$ = this._actor_service.getItems$();
    this.actors$.subscribe(
      actors => this.actors = actors,
    )
  }

  add(){
    this._actor_service.addItem('An actor');
  }

}
