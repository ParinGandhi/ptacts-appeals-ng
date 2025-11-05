import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetActionsComponent } from './widget-actions.component';

describe('WidgetActionsComponent', () => {
  let component: WidgetActionsComponent;
  let fixture: ComponentFixture<WidgetActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
