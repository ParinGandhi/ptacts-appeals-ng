import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDecisionManagerComponent } from './post-decision-manager.component';

describe('PostDecisionManagerComponent', () => {
  let component: PostDecisionManagerComponent;
  let fixture: ComponentFixture<PostDecisionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDecisionManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDecisionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
