import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAssignmentsComponent } from './common-assignments.component';

describe('CommonAssignmentsComponent', () => {
  let component: CommonAssignmentsComponent;
  let fixture: ComponentFixture<CommonAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonAssignmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
