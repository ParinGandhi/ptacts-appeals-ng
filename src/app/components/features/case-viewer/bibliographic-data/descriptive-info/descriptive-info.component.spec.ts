import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiveInfoComponent } from './descriptive-info.component';

describe('DescriptiveInfoComponent', () => {
  let component: DescriptiveInfoComponent;
  let fixture: ComponentFixture<DescriptiveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptiveInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
