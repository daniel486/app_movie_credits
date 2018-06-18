import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetailActorComponent } from './test-detail-actor.component';

describe('TestDetailActorComponent', () => {
  let component: TestDetailActorComponent;
  let fixture: ComponentFixture<TestDetailActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDetailActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDetailActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
