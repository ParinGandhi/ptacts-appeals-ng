import { Component, Input } from '@angular/core';

@Component({
  selector: 'ptacts-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() gridMessage!: string;
}
