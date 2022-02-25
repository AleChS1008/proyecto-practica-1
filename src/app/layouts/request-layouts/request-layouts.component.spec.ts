import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLayoutsComponent } from './request-layouts.component';

describe('RequestLayoutsComponent', () => {
  let component: RequestLayoutsComponent;
  let fixture: ComponentFixture<RequestLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
