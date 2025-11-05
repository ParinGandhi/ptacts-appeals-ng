import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseViewerHeaderComponent } from './case-viewer-header.component';

describe('CaseViewerHeaderComponent', () => {
  let component: CaseViewerHeaderComponent;
  let fixture: ComponentFixture<CaseViewerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseViewerHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseViewerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
