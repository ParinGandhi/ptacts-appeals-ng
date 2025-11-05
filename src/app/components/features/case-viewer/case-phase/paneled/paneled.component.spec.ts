import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneledComponent } from './paneled.component';

describe('PaneledComponent', () => {
  let component: PaneledComponent;
  let fixture: ComponentFixture<PaneledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaneledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaneledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
