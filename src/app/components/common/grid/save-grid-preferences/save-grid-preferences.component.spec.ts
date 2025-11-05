import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveGridPreferencesComponent } from './save-grid-preferences.component';

describe('SaveGridPreferencesComponent', () => {
  let component: SaveGridPreferencesComponent;
  let fixture: ComponentFixture<SaveGridPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveGridPreferencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveGridPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
