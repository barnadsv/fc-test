import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastCommentsPageComponent } from './fast-comments-page.component';

describe('FastCommentsPageComponent', () => {
  let component: FastCommentsPageComponent;
  let fixture: ComponentFixture<FastCommentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastCommentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastCommentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
