import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontoYCuotaComponent } from './monto-y-cuota.component';

describe('MontoYCuotaComponent', () => {
  let component: MontoYCuotaComponent;
  let fixture: ComponentFixture<MontoYCuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontoYCuotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontoYCuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
