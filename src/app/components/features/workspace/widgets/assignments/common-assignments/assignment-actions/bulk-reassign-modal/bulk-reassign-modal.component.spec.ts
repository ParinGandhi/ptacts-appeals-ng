import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkReassignModalComponent } from './bulk-reassign-modal.component';

describe('BulkReassignModalComponent', () => {
  let component: BulkReassignModalComponent;
  let fixture: ComponentFixture<BulkReassignModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkReassignModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkReassignModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
