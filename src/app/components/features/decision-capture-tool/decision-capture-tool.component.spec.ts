import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionCaptureToolComponent } from './decision-capture-tool.component';

describe('DecisionCaptureToolComponent', () => {
  let component: DecisionCaptureToolComponent;
  let fixture: ComponentFixture<DecisionCaptureToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionCaptureToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionCaptureToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
