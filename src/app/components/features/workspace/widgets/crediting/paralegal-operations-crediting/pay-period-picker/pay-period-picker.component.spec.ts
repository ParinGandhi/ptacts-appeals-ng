import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPeriodPickerComponent } from './pay-period-picker.component';

describe('PayPeriodPickerComponent', () => {
  let component: PayPeriodPickerComponent;
  let fixture: ComponentFixture<PayPeriodPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayPeriodPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayPeriodPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
