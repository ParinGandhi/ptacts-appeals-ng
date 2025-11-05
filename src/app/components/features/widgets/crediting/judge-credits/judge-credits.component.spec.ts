import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeCreditsComponent } from './judge-credits.component';

describe('JudgeCreditsComponent', () => {
  let component: JudgeCreditsComponent;
  let fixture: ComponentFixture<JudgeCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudgeCreditsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgeCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
