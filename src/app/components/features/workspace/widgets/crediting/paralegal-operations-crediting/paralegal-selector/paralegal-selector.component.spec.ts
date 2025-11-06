import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalegalSelectorComponent } from './paralegal-selector.component';

describe('ParalegalSelectorComponent', () => {
  let component: ParalegalSelectorComponent;
  let fixture: ComponentFixture<ParalegalSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParalegalSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParalegalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
