import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteToAppealModalComponent } from './promote-to-appeal-modal.component';

describe('PromoteToAppealModalComponent', () => {
  let component: PromoteToAppealModalComponent;
  let fixture: ComponentFixture<PromoteToAppealModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoteToAppealModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoteToAppealModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
