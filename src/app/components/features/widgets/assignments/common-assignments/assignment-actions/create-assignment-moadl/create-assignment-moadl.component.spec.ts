import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssignmentMoadlComponent } from './create-assignment-moadl.component';

describe('CreateAssignmentMoadlComponent', () => {
  let component: CreateAssignmentMoadlComponent;
  let fixture: ComponentFixture<CreateAssignmentMoadlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAssignmentMoadlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAssignmentMoadlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
