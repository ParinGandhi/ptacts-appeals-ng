import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgesDocketComponent } from './judges-docket.component';

describe('JudgesDocketComponent', () => {
  let component: JudgesDocketComponent;
  let fixture: ComponentFixture<JudgesDocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JudgesDocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgesDocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
