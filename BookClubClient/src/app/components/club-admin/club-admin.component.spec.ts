import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ClubAdminComponent } from './club-admin.component';

describe('ClubAdminComponent', () => {
  let component: ClubAdminComponent;
  let fixture: ComponentFixture<ClubAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubAdminComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



});


describe('1st tests', () => {


  it(`date field should have correct  '2021-06-15T23:25:22.125'`, () => {
    const fixture = TestBed.createComponent(ClubAdminComponent);
    const app = fixture.componentInstance;
    expect(app.post.date).toEqual("2021-06-15T23:25:22.125");
  });

});