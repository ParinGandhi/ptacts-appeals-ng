import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartiesModalComponent } from './update-parties-modal.component';

describe('UpdatePartiesModalComponent', () => {
  let component: UpdatePartiesModalComponent;
  let fixture: ComponentFixture<UpdatePartiesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePartiesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePartiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
