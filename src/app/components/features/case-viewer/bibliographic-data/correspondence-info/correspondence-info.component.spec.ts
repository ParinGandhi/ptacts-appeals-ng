import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceInfoComponent } from './correspondence-info.component';

describe('CorrespondenceInfoComponent', () => {
  let component: CorrespondenceInfoComponent;
  let fixture: ComponentFixture<CorrespondenceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrespondenceInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrespondenceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
