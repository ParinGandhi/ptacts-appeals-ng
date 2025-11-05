import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationManagerComponent } from './circulation-manager.component';

describe('CirculationManagerComponent', () => {
  let component: CirculationManagerComponent;
  let fixture: ComponentFixture<CirculationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculationManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
