import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkQueuesComponent } from './work-queues.component';

describe('WorkQueuesComponent', () => {
  let component: WorkQueuesComponent;
  let fixture: ComponentFixture<WorkQueuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkQueuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
