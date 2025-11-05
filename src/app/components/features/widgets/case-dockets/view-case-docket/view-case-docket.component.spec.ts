import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCaseDocketComponent } from './view-case-docket.component';

describe('ViewCaseDocketComponent', () => {
  let component: ViewCaseDocketComponent;
  let fixture: ComponentFixture<ViewCaseDocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCaseDocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCaseDocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
