import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronsComponent } from './chevrons.component';

describe('ChevronsComponent', () => {
  let component: ChevronsComponent;
  let fixture: ComponentFixture<ChevronsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevronsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChevronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
