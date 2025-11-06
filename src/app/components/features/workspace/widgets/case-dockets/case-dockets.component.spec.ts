import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDocketsComponent } from './case-dockets.component';

describe('CaseDocketsComponent', () => {
  let component: CaseDocketsComponent;
  let fixture: ComponentFixture<CaseDocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseDocketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseDocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
