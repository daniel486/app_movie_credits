import { Component, OnInit } from '@angular/core';
import { ActorService } from '../test/services/actor.service';

@Component({
  selector: 'app-test-actors',
  templateUrl: './test-actors.component.html',
  styleUrls: ['./test-actors.component.scss']
})
export class TestActorsComponent implements OnInit {

  public actor: Object[];

  constructor(private actorService: ActorService) {}

  ngOnInit() {
    this.actor = this.actorService.getItems();
  }

}
