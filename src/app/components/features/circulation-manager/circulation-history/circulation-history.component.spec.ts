import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationHistoryComponent } from './circulation-history.component';

describe('CirculationHistoryComponent', () => {
  let component: CirculationHistoryComponent;
  let fixture: ComponentFixture<CirculationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculationHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
