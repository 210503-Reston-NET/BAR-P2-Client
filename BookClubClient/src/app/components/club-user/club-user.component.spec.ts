import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubUserComponent } from './club-user.component';

describe('ClubUserComponent', () => {
  let component: ClubUserComponent;
  let fixture: ComponentFixture<ClubUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
