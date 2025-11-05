import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDocketComponent } from './master-docket.component';

describe('MasterDocketComponent', () => {
  let component: MasterDocketComponent;
  let fixture: ComponentFixture<MasterDocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
