import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealsDocumentsComponent } from './appeals-documents.component';

describe('AppealsDocumentsComponent', () => {
  let component: AppealsDocumentsComponent;
  let fixture: ComponentFixture<AppealsDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppealsDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppealsDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
