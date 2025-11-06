import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSearchComponent } from './assignment-search.component';

describe('AssignmentSearchComponent', () => {
  let component: AssignmentSearchComponent;
  let fixture: ComponentFixture<AssignmentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
