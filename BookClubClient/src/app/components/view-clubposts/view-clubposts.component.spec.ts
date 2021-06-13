import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClubpostsComponent } from './view-clubposts.component';

describe('ViewClubpostsComponent', () => {
  let component: ViewClubpostsComponent;
  let fixture: ComponentFixture<ViewClubpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClubpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClubpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
