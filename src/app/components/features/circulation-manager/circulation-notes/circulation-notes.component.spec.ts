import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationNotesComponent } from './circulation-notes.component';

describe('CirculationNotesComponent', () => {
  let component: CirculationNotesComponent;
  let fixture: ComponentFixture<CirculationNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculationNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculationNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
