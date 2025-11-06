import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalegalOperationsCreditingComponent } from './paralegal-operations-crediting.component';

describe('ParalegalOperationsCreditingComponent', () => {
  let component: ParalegalOperationsCreditingComponent;
  let fixture: ComponentFixture<ParalegalOperationsCreditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParalegalOperationsCreditingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParalegalOperationsCreditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
