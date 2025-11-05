import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreditsModalComponent } from './edit-credits-modal.component';

describe('EditCreditsModalComponent', () => {
  let component: EditCreditsModalComponent;
  let fixture: ComponentFixture<EditCreditsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCreditsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCreditsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
