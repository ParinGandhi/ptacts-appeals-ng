import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDocketComponent } from './assignment-docket.component';

describe('AssignmentDocketComponent', () => {
  let component: AssignmentDocketComponent;
  let fixture: ComponentFixture<AssignmentDocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentDocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentDocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
