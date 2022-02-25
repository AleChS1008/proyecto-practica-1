import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaContratoComponent } from './firma-contrato.component';

describe('FirmaContratoComponent', () => {
  let component: FirmaContratoComponent;
  let fixture: ComponentFixture<FirmaContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmaContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmaContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
