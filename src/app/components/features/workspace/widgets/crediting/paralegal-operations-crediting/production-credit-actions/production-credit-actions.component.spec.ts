import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionCreditActionsComponent } from './production-credit-actions.component';

describe('ProductionCreditActionsComponent', () => {
  let component: ProductionCreditActionsComponent;
  let fixture: ComponentFixture<ProductionCreditActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionCreditActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionCreditActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
