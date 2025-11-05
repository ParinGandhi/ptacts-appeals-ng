import { Component, Input } from '@angular/core';
import { GridDetails } from '../../../../../models/common/GridDetails.model';
import { FILENAME } from '../../../../constants/file-name.constants';

@Component({
  selector: 'ptacts-export',
  imports: [],
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss',
})
export class ExportComponent {
  @Input() gridDetails!: GridDetails;

  exportData() {
    console.log(this.gridDetails);

    const titleKeys = Object.keys(this.gridDetails.gridOptions.rowData![0]);

    const refinedData = [];

    refinedData.push(titleKeys);

    this.gridDetails.gridOptions.rowData!.forEach(
      (item: { [s: string]: unknown } | ArrayLike<unknown>) => {
        refinedData.push(Object.values(item));
      }
    );

    let csvContent = '';

    refinedData.forEach((row) => {
      csvContent += row.join(',') + '\n';
    });

    // const currentTime = this.commonUtils.getCurrentTime();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
    const objUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', objUrl);
    link.setAttribute(
      'download',
      `${this.gridDetails.fileName}${FILENAME.EXTENSIONS.CSV}`
    );
    // link.textContent = 'Click to Download'
    link.click();

    // document?.querySelector('body')?.append(link)
  }
}
