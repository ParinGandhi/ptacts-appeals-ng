import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionRenderedComponent } from './decision-rendered.component';

describe('DecisionRenderedComponent', () => {
  let component: DecisionRenderedComponent;
  let fixture: ComponentFixture<DecisionRenderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionRenderedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionRenderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
