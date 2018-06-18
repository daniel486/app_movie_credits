import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbCreditsComponent } from './tmdb-credits.component';

describe('TmdbCreditsComponent', () => {
  let component: TmdbCreditsComponent;
  let fixture: ComponentFixture<TmdbCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmdbCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
