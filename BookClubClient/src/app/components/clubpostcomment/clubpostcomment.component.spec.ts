import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubpostcommentComponent } from './clubpostcomment.component';

describe('ClubpostcommentComponent', () => {
  let component: ClubpostcommentComponent;
  let fixture: ComponentFixture<ClubpostcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubpostcommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubpostcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
