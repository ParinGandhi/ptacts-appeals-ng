import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ptacts-widget-refresh',
  imports: [CommonModule],
  templateUrl: './widget-refresh.component.html',
  styleUrl: './widget-refresh.component.scss'
})
export class WidgetRefreshComponent implements OnInit {
  lastUpdated!: Date;

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.lastUpdated = new Date();
  }
}
