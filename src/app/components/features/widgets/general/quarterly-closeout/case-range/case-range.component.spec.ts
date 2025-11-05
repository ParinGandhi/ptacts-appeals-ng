import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseRangeComponent } from './case-range.component';

describe('CaseRangeComponent', () => {
  let component: CaseRangeComponent;
  let fixture: ComponentFixture<CaseRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
