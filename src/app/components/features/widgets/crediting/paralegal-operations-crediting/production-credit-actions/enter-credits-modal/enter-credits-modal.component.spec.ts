import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCreditsModalComponent } from './enter-credits-modal.component';

describe('EnterCreditsModalComponent', () => {
  let component: EnterCreditsModalComponent;
  let fixture: ComponentFixture<EnterCreditsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterCreditsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterCreditsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
