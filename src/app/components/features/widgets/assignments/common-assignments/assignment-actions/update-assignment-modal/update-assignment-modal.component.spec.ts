import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssignmentModalComponent } from './update-assignment-modal.component';

describe('UpdateAssignmentModalComponent', () => {
  let component: UpdateAssignmentModalComponent;
  let fixture: ComponentFixture<UpdateAssignmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAssignmentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAssignmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
