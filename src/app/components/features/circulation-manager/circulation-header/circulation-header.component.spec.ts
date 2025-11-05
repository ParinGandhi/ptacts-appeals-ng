import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationHeaderComponent } from './circulation-header.component';

describe('CirculationHeaderComponent', () => {
  let component: CirculationHeaderComponent;
  let fixture: ComponentFixture<CirculationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculationHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
