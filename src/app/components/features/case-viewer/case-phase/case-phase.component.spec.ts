import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePhaseComponent } from './case-phase.component';

describe('CasePhaseComponent', () => {
  let component: CasePhaseComponent;
  let fixture: ComponentFixture<CasePhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasePhaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasePhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
