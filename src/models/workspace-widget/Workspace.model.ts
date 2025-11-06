import { Widget } from "./Widget.model";

export interface Workspace {
  userWorkspaceIdentifier: number;
  userWorkspaceName: string;
  currentWorkspaceOrderNumber: number;
  defaultIndicator: boolean;
  structure: string;
  userWorkspaceWidgetsData: Array<Widget>;
}
