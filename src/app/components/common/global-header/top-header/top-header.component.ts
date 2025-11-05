import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HEADER_FOOTER } from '../../../../constants/header-footer.constants';
import { NotificationsModalComponent } from './notifications-modal/notifications-modal.component';
import { UserActionsComponent } from './user-actions/user-actions.component';

@Component({
  selector: 'ptacts-top-header',
  imports: [CommonModule, NotificationsModalComponent, UserActionsComponent],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
})
export class TopHeaderComponent {
  mainLinks = HEADER_FOOTER.GLOBAL_HEADER.MAIN;
  myusptoLinks = HEADER_FOOTER.GLOBAL_HEADER.MYUSPTO;
  helpLinks = HEADER_FOOTER.GLOBAL_HEADER.HELP;
  usptoLink = HEADER_FOOTER.GLOBAL_HEADER.USPTO;
  banner = HEADER_FOOTER.GLOBAL_HEADER.PTACTS;
}
