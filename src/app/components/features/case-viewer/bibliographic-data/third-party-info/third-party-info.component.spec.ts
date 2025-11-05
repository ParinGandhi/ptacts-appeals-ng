import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyInfoComponent } from './third-party-info.component';

describe('ThirdPartyInfoComponent', () => {
  let component: ThirdPartyInfoComponent;
  let fixture: ComponentFixture<ThirdPartyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdPartyInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdPartyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
