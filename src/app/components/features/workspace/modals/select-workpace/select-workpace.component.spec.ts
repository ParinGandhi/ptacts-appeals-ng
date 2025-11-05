import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWorkpaceComponent } from './select-workpace.component';

describe('SelectWorkpaceComponent', () => {
  let component: SelectWorkpaceComponent;
  let fixture: ComponentFixture<SelectWorkpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectWorkpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWorkpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
