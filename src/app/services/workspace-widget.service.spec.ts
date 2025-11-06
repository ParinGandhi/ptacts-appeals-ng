import { TestBed } from '@angular/core/testing';

import { WorkspaceWidgetService } from './workspace-widget.service';

describe('WorkspaceWidgetService', () => {
  let service: WorkspaceWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkspaceWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
