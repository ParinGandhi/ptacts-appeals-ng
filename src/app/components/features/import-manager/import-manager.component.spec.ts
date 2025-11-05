import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportManagerComponent } from './import-manager.component';

describe('ImportManagerComponent', () => {
  let component: ImportManagerComponent;
  let fixture: ComponentFixture<ImportManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
