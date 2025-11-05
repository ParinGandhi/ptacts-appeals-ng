import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureWorkspaceSettingsComponent } from './configure-workspace-settings.component';

describe('ConfigureWorkspaceSettingsComponent', () => {
  let component: ConfigureWorkspaceSettingsComponent;
  let fixture: ComponentFixture<ConfigureWorkspaceSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigureWorkspaceSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureWorkspaceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
