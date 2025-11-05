import { Component } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BottomHeaderComponent } from './bottom-header/bottom-header.component';

@Component({
  selector: 'ptacts-global-header',
  imports: [TopHeaderComponent, BottomHeaderComponent],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.scss'
})
export class GlobalHeaderComponent {

}
