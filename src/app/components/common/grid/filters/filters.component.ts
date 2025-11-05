import { Component, inject, Input } from '@angular/core';
import { GridDetails } from '../../../../../models/common/GridDetails.model';
import { CommonUtilitiesService } from '../../../../services/common-utilities.service';

@Component({
  selector: 'ptacts-filters',
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Input() gridDetails!: GridDetails;

  commonUtils = inject(CommonUtilitiesService);

  getFilterCount(): number {
    if (this.gridDetails && this.gridDetails.gridApi) {
      const filterModel = this.gridDetails.gridApi.getFilterModel();
      return Object.keys(filterModel).length;
    } else {
      return 0;
    }
  }

  clearAllFilters(): void {
    if (this.gridDetails && this.gridDetails.gridApi) {
      this.gridDetails.gridApi.setFilterModel(null);
    }
  }
}
