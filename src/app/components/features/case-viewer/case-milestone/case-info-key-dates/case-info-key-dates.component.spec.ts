import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInfoKeyDatesComponent } from './case-info-key-dates.component';

describe('CaseInfoKeyDatesComponent', () => {
  let component: CaseInfoKeyDatesComponent;
  let fixture: ComponentFixture<CaseInfoKeyDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseInfoKeyDatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseInfoKeyDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
