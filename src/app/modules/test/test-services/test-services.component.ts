import { Component, OnInit } from '@angular/core';
//import {DatabaseService} from '../service/database.service';
import {ActorService} from '../services/actor.service';
import { DatabaseService } from '../services/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.scss']
})
export class TestServicesComponent implements OnInit {

  public db:any[];
  public db$:Observable<any>;
  
  //users:any[];

  //constructor(private actorService: ActorService) { }

  constructor(private databaseService: DatabaseService){}
  ngOnInit() {
    this.db = this.databaseService.getItems();
    this.db$ = this.databaseService.getItems$();
    this.db$.subscribe(
      db => this.db = db,
    )
    //this.users = this.actorService.getItems();
  }

  setRanking$(index, ranking){
    this.databaseService.setRanking(index, ranking);
  }

}
