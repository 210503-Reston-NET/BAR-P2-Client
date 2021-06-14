import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookclubComponent } from './add-bookclub.component';

describe('AddBookclubComponent', () => {
  let component: AddBookclubComponent;
  let fixture: ComponentFixture<AddBookclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
