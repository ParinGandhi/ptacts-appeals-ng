import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSubsequentDecisionComponent } from './pending-subsequent-decision.component';

describe('PendingSubsequentDecisionComponent', () => {
  let component: PendingSubsequentDecisionComponent;
  let fixture: ComponentFixture<PendingSubsequentDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingSubsequentDecisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingSubsequentDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
