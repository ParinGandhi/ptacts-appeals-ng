import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportHearingScheduleModalComponent } from './import-hearing-schedule-modal.component';

describe('ImportHearingScheduleModalComponent', () => {
  let component: ImportHearingScheduleModalComponent;
  let fixture: ComponentFixture<ImportHearingScheduleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportHearingScheduleModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportHearingScheduleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
