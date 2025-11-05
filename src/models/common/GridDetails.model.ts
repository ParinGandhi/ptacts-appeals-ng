import { GridApi, GridOptions } from 'ag-grid-community';

export class GridDetails {
  gridOptions!: GridOptions;
  gridLoading: boolean = false;
  fileName: string = '';
  enableExport: boolean = true;
  enablePagination: boolean = false;
  message: string = '';
  showingTo: number | undefined = 0;
  showingFrom: number | undefined = 0;
  totalRecords: number | undefined = 0;
  filterCount: number = 0;
  gridApi: GridApi | undefined;
  defaultColDef = {
    filter: true,
    sortable: true,
    floatingFilter: true,
    suppressMenu: false,
    suppressMoveable: true,
    resizable: true,
  };

  constructor(fileName: string, message: string) {
    this.fileName = fileName;
    this.message = message;
  }
}
