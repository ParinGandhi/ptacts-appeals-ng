import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBriefPanelingInfoModalComponent } from './import-brief-paneling-info-modal.component';

describe('ImportBriefPanelingInfoModalComponent', () => {
  let component: ImportBriefPanelingInfoModalComponent;
  let fixture: ComponentFixture<ImportBriefPanelingInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportBriefPanelingInfoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportBriefPanelingInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
