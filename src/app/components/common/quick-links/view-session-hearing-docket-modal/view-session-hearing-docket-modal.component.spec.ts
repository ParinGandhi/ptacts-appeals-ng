import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSessionHearingDocketModalComponent } from './view-session-hearing-docket-modal.component';

describe('ViewSessionHearingDocketModalComponent', () => {
  let component: ViewSessionHearingDocketModalComponent;
  let fixture: ComponentFixture<ViewSessionHearingDocketModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSessionHearingDocketModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSessionHearingDocketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
