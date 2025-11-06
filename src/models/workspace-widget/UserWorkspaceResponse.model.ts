import { ApplicationUserData } from "./ApplicationUserData.model";
import { Workspace } from "./Workspace.model";

export interface UserWorkspaceResponse {
  ptabDefaultRefreshTime: number;
  ptabReadOnlyUser: boolean;
  applicationUserData: ApplicationUserData;
  ptabDueDateNonEditableUser: boolean;
  userWorkspaces: Array<Workspace>;
}
