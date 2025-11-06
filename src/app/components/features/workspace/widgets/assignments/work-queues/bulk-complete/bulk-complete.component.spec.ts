import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCompleteComponent } from './bulk-complete.component';

describe('BulkCompleteComponent', () => {
  let component: BulkCompleteComponent;
  let fixture: ComponentFixture<BulkCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
