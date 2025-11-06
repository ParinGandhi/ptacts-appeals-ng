import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentAttorneyAdminActionsComponent } from './patent-attorney-admin-actions.component';

describe('PatentAttorneyAdminActionsComponent', () => {
  let component: PatentAttorneyAdminActionsComponent;
  let fixture: ComponentFixture<PatentAttorneyAdminActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatentAttorneyAdminActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatentAttorneyAdminActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
