import { Component, Input } from '@angular/core';
import { GridDetails } from '../../../../../models/common/GridDetails.model';

@Component({
  selector: 'ptacts-records',
  imports: [],
  templateUrl: './records.component.html',
  styleUrl: './records.component.scss',
})
export class RecordsComponent {
  @Input() gridDetails!: GridDetails;

  getTotalRecords() {
    if (this.gridDetails && this.gridDetails.gridApi) {
      return this.gridDetails.gridApi.getDisplayedRowCount();
    } else {
      return 0;
    }
  }
}
