import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentInfoModalComponent } from './assignment-info-modal.component';

describe('AssignmentInfoModalComponent', () => {
  let component: AssignmentInfoModalComponent;
  let fixture: ComponentFixture<AssignmentInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentInfoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
