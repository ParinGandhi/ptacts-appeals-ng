import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyCloseoutComponent } from './quarterly-closeout.component';

describe('QuarterlyCloseoutComponent', () => {
  let component: QuarterlyCloseoutComponent;
  let fixture: ComponentFixture<QuarterlyCloseoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuarterlyCloseoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuarterlyCloseoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
