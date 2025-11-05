import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingScheduleComponent } from './hearing-schedule.component';

describe('HearingScheduleComponent', () => {
  let component: HearingScheduleComponent;
  let fixture: ComponentFixture<HearingScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HearingScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
