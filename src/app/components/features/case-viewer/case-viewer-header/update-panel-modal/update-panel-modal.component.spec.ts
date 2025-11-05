import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePanelModalComponent } from './update-panel-modal.component';

describe('UpdatePanelModalComponent', () => {
  let component: UpdatePanelModalComponent;
  let fixture: ComponentFixture<UpdatePanelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePanelModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePanelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
