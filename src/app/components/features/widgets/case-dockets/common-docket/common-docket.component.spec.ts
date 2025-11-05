import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDocketComponent } from './common-docket.component';

describe('CommonDocketComponent', () => {
  let component: CommonDocketComponent;
  let fixture: ComponentFixture<CommonDocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonDocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonDocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
