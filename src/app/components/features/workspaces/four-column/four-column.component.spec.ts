import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourColumnComponent } from './four-column.component';

describe('FourColumnComponent', () => {
  let component: FourColumnComponent;
  let fixture: ComponentFixture<FourColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
