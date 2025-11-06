import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FullViewComponent } from '../workspaces/full-view/full-view.component';
import { FourColumnComponent } from '../workspaces/four-column/four-column.component';
import { TwoColumnComponent } from '../workspaces/two-column/two-column.component';
import { ThreeColumnComponent } from '../workspaces/three-column/three-column.component';
import { LeftColumnComponent } from '../workspaces/left-column/left-column.component';
import { RightColumnComponent } from '../workspaces/right-column/right-column.component';
import { FiveColumnComponent } from '../workspaces/five-column/five-column.component';
import { WorkspaceActionsComponent } from '../workspace-actions/workspace-actions.component';
import { WorkspaceService } from '../../../services/workspace.service';
import { WorkspaceWidgetService } from '../../../services/workspace-widget.service';

@Component({
  selector: 'ptacts-workspace',
  imports: [
    TabsModule,
    CommonModule,
    FullViewComponent,
    FourColumnComponent,
    TwoColumnComponent,
    ThreeColumnComponent,
    LeftColumnComponent,
    RightColumnComponent,
    FiveColumnComponent,
    WorkspaceActionsComponent,
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss',
})
export class WorkspaceComponent implements OnInit {
  workspaceService = inject(WorkspaceService);
  workspaceWidgetUtils = inject(WorkspaceWidgetService);
  @ViewChild(WorkspaceActionsComponent)
  workspaceActions!: WorkspaceActionsComponent;
  // workspaces!: UserWorkspaceResponse;
  // STRUCTURE: WorkspaceActionsComponent.STRUCTURE;

  selectedTabIndex: number = 0;

  ngOnInit(): void {
    this.getWorkspaces();
  }

  getWorkspaces(): void {
    this.workspaceService
      .getWorkspaces()
      .subscribe((response: UserWorkspaceResponse) => {
        this.workspaces = response;
        this.workspaces.userWorkspaces.forEach(
          (workspace: Workspace, index: number) => {
            if (workspace.defaultIndicator) {
              this.selectTab(workspace, index);
            }
          }
        );
      });
  }

  selectTab(tab: any, index: number) {
    this.selectedTabIndex = index;
    this.workspaceWidgetUtils.setActiveTab(tab.userWorkspaceIdentifier);
    setTimeout(() => {});
  }
}
