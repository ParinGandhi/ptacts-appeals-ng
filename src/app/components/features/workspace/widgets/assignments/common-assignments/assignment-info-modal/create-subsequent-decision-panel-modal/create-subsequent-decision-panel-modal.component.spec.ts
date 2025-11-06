import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubsequentDecisionPanelModalComponent } from './create-subsequent-decision-panel-modal.component';

describe('CreateSubsequentDecisionPanelModalComponent', () => {
  let component: CreateSubsequentDecisionPanelModalComponent;
  let fixture: ComponentFixture<CreateSubsequentDecisionPanelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSubsequentDecisionPanelModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubsequentDecisionPanelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
