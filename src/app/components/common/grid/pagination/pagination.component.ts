import { Component, Input, OnInit } from '@angular/core';
import { GridDetails } from '../../../../../models/common/GridDetails.model';
import { CONFIGS } from '../../../../constants/configurations.constants';
import { GridApi } from 'ag-grid-community';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from '../records/records.component';

@Component({
  selector: 'ptacts-pagination',
  imports: [FormsModule, CommonModule, RecordsComponent
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  @Input() gridDetails!: GridDetails;

  currentPage: number = 1;
  recordsPerPage: number[] = CONFIGS.GRID.RECORDS_PER_PAGE;
  currentRecordsPerPage: number = CONFIGS.GRID.RECORDS_PER_PAGE[0];
  totalNumberOfPages: number = 0;
  gridApi!: GridApi;
  maxNumberOfPages: number = 2;
  reachedLastPage: boolean = false;
  recordInfo = {
    showingTo: 0,
    showingFrom: 0,
    totalRecords: 0,
  };

  ngOnInit(): void {
    this.gridDetails.totalRecords =
      this.gridDetails.gridOptions.rowData?.length;
    this.calculateMaxNumberOfPages();
    this.gridDetails.gridOptions.onPaginationChanged = ($event) => {
      this.gridApi = $event.api;
    };
  }

  calculateMaxNumberOfPages() {
    if (this.gridDetails.totalRecords) {
      this.maxNumberOfPages = Math.ceil(
        this.gridDetails.totalRecords / this.currentRecordsPerPage
      );
      if (this.currentPage >= this.maxNumberOfPages) {
        this.reachedLastPage = true;
      }
      this.updateRecordsInfo();
    }
  }

  calculateNumberOfPages() {
    this.totalNumberOfPages = 0;
    if (this.gridDetails.totalRecords) {
      this.totalNumberOfPages =
        this.gridDetails.totalRecords / this.currentRecordsPerPage;
    }
  }

  calculateCurrentPage(direction: string) {
    switch (direction) {
      case 'previous':
        if (this.currentPage > 1) {
          this.gridApi.paginationGoToPreviousPage();
          this.currentPage--;
        }
        break;
      case 'next':
        this.gridApi.paginationGoToNextPage();
        if (this.currentPage < this.maxNumberOfPages) {
          this.currentPage++;
        }
        break;
      default:
        break;
    }
  }

  setPerPage(perPage: number) {
    this.currentRecordsPerPage = perPage;
    this.gridDetails.showingTo = perPage;
    this.gridApi.setGridOption('paginationPageSize', perPage);
    this.updateRecordsInfo();
    this.calculateMaxNumberOfPages();
  }

  goToPage(pageType: string | number) {
    if (typeof pageType == 'number') {
      if (pageType < 1) {
        this.currentPage = 1;
      }
      this.gridApi.paginationGoToPage(this.currentPage - 1);
    } else {
      switch (pageType) {
        case 'first':
          this.gridApi.paginationGoToFirstPage();
          break;
        case 'previous':
          if (this.currentPage > 1) {
            this.gridApi.paginationGoToPreviousPage();
          }
          break;
        case 'next':
          this.gridApi.paginationGoToNextPage();
          break;
        case 'last':
          this.gridApi.paginationGoToLastPage();
          break;
        default:
          break;
      }
    }

    this.currentPage = this.gridApi.paginationGetCurrentPage() + 1;
    this.updateRecordsInfo();
  }


  goToSpecificPage(specificPage: number) {
    if (specificPage < 1) {
      this.currentPage = 1;
    }
    this.gridApi.paginationGoToPage(this.currentPage - 1);
  }

  updateRecordsInfo() {
    let showingTo = this.currentRecordsPerPage * this.currentPage;
    if (showingTo > this.gridDetails.gridOptions.rowData!.length) {
      showingTo = this.gridDetails.gridOptions.rowData!.length;
    }
    this.gridDetails.showingTo = showingTo;
    this.gridDetails.showingFrom =
      this.gridDetails.showingTo - this.currentRecordsPerPage + 1;
  }
}
