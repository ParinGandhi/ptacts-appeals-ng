import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { GridDetails } from '../../../../models/common/GridDetails.model';
import { Widget } from '../../../../models/common/Widget.model';
import { PaginationComponent } from './pagination/pagination.component';

ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'ptacts-grid',
  imports: [AgGridAngular, CommonModule, PaginationComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  standalone: true,
})
export class GridComponent implements OnInit {
  @Input() gridDetails!: GridDetails;
  @Input() widgetInfo!: Widget;

  ngOnInit(): void {

  }
}
