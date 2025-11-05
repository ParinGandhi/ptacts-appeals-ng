import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgaAdminConsoleModalComponent } from './pga-admin-console-modal.component';

describe('PgaAdminConsoleModalComponent', () => {
  let component: PgaAdminConsoleModalComponent;
  let fixture: ComponentFixture<PgaAdminConsoleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgaAdminConsoleModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgaAdminConsoleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
