import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubpostComponent } from './clubpost.component';

describe('ClubpostComponent', () => {
  let component: ClubpostComponent;
  let fixture: ComponentFixture<ClubpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
