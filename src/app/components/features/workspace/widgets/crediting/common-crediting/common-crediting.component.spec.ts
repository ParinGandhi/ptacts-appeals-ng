import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCreditingComponent } from './common-crediting.component';

describe('CommonCreditingComponent', () => {
  let component: CommonCreditingComponent;
  let fixture: ComponentFixture<CommonCreditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonCreditingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonCreditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
