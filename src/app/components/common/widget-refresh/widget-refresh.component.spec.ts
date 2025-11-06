import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRefreshComponent } from './widget-refresh.component';

describe('WidgetRefreshComponent', () => {
  let component: WidgetRefreshComponent;
  let fixture: ComponentFixture<WidgetRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetRefreshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
