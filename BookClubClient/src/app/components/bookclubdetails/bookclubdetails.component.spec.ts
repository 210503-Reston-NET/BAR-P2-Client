import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookclubdetailsComponent } from './bookclubdetails.component';

describe('BookclubdetailsComponent', () => {
  let component: BookclubdetailsComponent;
  let fixture: ComponentFixture<BookclubdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookclubdetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookclubdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
