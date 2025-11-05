import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenExternalLinksComponent } from './open-external-links.component';

describe('OpenExternalLinksComponent', () => {
  let component: OpenExternalLinksComponent;
  let fixture: ComponentFixture<OpenExternalLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenExternalLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenExternalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
