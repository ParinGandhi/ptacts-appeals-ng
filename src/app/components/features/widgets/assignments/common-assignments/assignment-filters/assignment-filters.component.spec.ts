import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFiltersComponent } from './assignment-filters.component';

describe('AssignmentFiltersComponent', () => {
  let component: AssignmentFiltersComponent;
  let fixture: ComponentFixture<AssignmentFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
