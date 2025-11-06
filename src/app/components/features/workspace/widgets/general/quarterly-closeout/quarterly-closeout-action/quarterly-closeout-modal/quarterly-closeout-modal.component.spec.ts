import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyCloseoutModalComponent } from './quarterly-closeout-modal.component';

describe('QuarterlyCloseoutModalComponent', () => {
  let component: QuarterlyCloseoutModalComponent;
  let fixture: ComponentFixture<QuarterlyCloseoutModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuarterlyCloseoutModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuarterlyCloseoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
