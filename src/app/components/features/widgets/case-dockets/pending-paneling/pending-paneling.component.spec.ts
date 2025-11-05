import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPanelingComponent } from './pending-paneling.component';

describe('PendingPanelingComponent', () => {
  let component: PendingPanelingComponent;
  let fixture: ComponentFixture<PendingPanelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingPanelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingPanelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
