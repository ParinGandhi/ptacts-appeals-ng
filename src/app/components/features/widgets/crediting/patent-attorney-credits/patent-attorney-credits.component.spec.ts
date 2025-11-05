import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentAttorneyCreditsComponent } from './patent-attorney-credits.component';

describe('PatentAttorneyCreditsComponent', () => {
  let component: PatentAttorneyCreditsComponent;
  let fixture: ComponentFixture<PatentAttorneyCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatentAttorneyCreditsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatentAttorneyCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
