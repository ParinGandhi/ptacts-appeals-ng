import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveColumnComponent } from './five-column.component';

describe('FiveColumnComponent', () => {
  let component: FiveColumnComponent;
  let fixture: ComponentFixture<FiveColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
