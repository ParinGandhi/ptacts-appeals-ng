import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealsCaseDocketComponent } from './appeals-case-docket.component';

describe('AppealsCaseDocketComponent', () => {
  let component: AppealsCaseDocketComponent;
  let fixture: ComponentFixture<AppealsCaseDocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppealsCaseDocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppealsCaseDocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
