import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSearchComponent } from './credit-search.component';

describe('CreditSearchComponent', () => {
  let component: CreditSearchComponent;
  let fixture: ComponentFixture<CreditSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
