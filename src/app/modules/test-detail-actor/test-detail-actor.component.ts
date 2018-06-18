import { Component, OnInit } from '@angular/core';
import { ActorService } from '../test/services/actor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-detail-actor',
  templateUrl: './test-detail-actor.component.html',
  styleUrls: ['./test-detail-actor.component.scss']
})
export class TestDetailActorComponent implements OnInit {

  actor:any;
  private sub: any;
  constructor(
    private actorService: ActorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id:number = params['id'];
      this.actor = this.actorService.get(id-1);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
