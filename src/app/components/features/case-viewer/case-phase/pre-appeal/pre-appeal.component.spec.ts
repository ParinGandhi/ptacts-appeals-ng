import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAppealComponent } from './pre-appeal.component';

describe('PreAppealComponent', () => {
  let component: PreAppealComponent;
  let fixture: ComponentFixture<PreAppealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreAppealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
