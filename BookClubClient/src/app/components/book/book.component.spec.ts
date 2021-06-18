import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let mockbook: {
    title: "Computer science",
    author: 'Henderson',
    isbn: "897654SB",
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(true);
  });

  it('Computer science book author should match', () => {
    expect(mockbook.author).toEqual(mockbook.author);
  });


});

describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});