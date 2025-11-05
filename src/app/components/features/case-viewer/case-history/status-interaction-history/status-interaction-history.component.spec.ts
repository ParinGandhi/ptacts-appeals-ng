import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusInteractionHistoryComponent } from './status-interaction-history.component';

describe('StatusInteractionHistoryComponent', () => {
  let component: StatusInteractionHistoryComponent;
  let fixture: ComponentFixture<StatusInteractionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusInteractionHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusInteractionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
