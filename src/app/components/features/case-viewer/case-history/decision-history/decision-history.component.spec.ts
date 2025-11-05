import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionHistoryComponent } from './decision-history.component';

describe('DecisionHistoryComponent', () => {
  let component: DecisionHistoryComponent;
  let fixture: ComponentFixture<DecisionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
