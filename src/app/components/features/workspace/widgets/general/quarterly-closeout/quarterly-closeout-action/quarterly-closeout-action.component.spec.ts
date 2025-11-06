import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyCloseoutActionComponent } from './quarterly-closeout-action.component';

describe('QuarterlyCloseoutActionComponent', () => {
  let component: QuarterlyCloseoutActionComponent;
  let fixture: ComponentFixture<QuarterlyCloseoutActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuarterlyCloseoutActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuarterlyCloseoutActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
