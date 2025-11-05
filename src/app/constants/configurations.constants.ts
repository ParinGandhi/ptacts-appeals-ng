import { NgxLoggerLevel } from 'ngx-logger';

export const CONFIGS = {
  TOASTR: {
    OPTIONS: {
      closeButton: true,
      timeOut: 7000,
      extendedTimeOut: 10000,
    },
    TYPE: {
      SUCCESS: 'success',
      WARNING: 'warning',
      ERROR: 'error',
    },
  },
  LOGGER: {
    OPTIONS: {
      level: NgxLoggerLevel.DEBUG,
      timestampFormat: 'MM/dd/yyyy hh:mm:ss',
    },
  },
  GRID: {
    RECORDS_PER_PAGE: [10, 25, 50, 100],
  },
  URLS: {
    WORKSPACE_SERVICES: '/api/workspace',
  },
};
