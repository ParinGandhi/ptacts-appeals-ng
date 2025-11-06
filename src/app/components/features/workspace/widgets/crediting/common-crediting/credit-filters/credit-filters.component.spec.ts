import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditFiltersComponent } from './credit-filters.component';

describe('CreditFiltersComponent', () => {
  let component: CreditFiltersComponent;
  let fixture: ComponentFixture<CreditFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
