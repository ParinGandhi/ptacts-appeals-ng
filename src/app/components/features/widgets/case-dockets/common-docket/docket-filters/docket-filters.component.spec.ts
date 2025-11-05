import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketFiltersComponent } from './docket-filters.component';

describe('DocketFiltersComponent', () => {
  let component: DocketFiltersComponent;
  let fixture: ComponentFixture<DocketFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocketFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocketFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
