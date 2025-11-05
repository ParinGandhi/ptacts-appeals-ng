import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInfoBarComponent } from './case-info-bar.component';

describe('CaseInfoBarComponent', () => {
  let component: CaseInfoBarComponent;
  let fixture: ComponentFixture<CaseInfoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseInfoBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
