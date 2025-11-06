import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserWorkspaceResponse } from '../../models/workspace-widget/UserWorkspaceResponse.model';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  http = inject(HttpClient);

  getWorkspaces(): Observable<UserWorkspaceResponse> {
    return this.http.get<UserWorkspaceResponse>('/workspace-response.json');
  }

  getWidgets(): Observable<any> {
    return this.http.get<any>('/widgets.json');
  }
}
