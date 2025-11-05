# Tasks

### _Common functionality_

- Constants
  - Separated by functionality: urls, toast message, logger config, etc
- Common utilities
  - Logger
  - Toastr messages
  - Modal setup
- Date/Time utilities
- Grid utilities
- Auth guard - guard all routes and reroute to login or specific page (404, 401, 403, etc)
- Auth interceptor
- Error handler for http and non-http errors
- State management (ngxs)
  - Active tab
- Pipes for modifying DOM easily
- Environment files

---

### _Initial Setup_

x USPTO Strap
x Bootstrap
x NGX Bootstrap
x Font awesome
x AG Grid
x NGX Logger
x NGX Toastr
x NGXS state management

### _Order of setup_

- Global header
- AG Grid
  - Download
  - Export
  - Filters
  - Message
  - Pagination
  - Records
  - Save grid preferences
- Loading
- State management 

### _App structure_

- components
  - common
    - global-header
      - bottom-header
        - case-search
      - top-header
        - notifications-modal
        - user-actions
    - grid
      - download
      - export
      - filters
      - message
      - pagination
      - records
      - save-grid-preferences
    - loading-screen
  - features
    - case-viewer
      - appeals-documents
        - document-table
        - document-viewer
      - bibliographic-data
        - case-notes
        - correspondence-info
        - descriptive-info
        - parent-info
        - third-party-info
      - case-history
        - assignment-history
        - decision-history
        - status-interaction-history
      - case-milestone
        - application-dates
        - case-info-key-dates
      - case-phase
        - decision-rendered
        - master-docket
        - paneled
        - pending-subsequent-decision
        - pre-appeal
      - case-viewer-header
        - actions
        - case-info-bar
        - chevrons
        - update-panel-modal
        - update-parties-modal
    - circulation-manager
      - circulation
      - circulation-header
      - circulation-history
      - circulation-notes
    - decision-capture-tool
    - hearing-schedule
    - import-manager
    - post-decision-manager
    - workspace
      - modals
        - add-widgets
        - add-workspace
        - configure-workspace-settings
        - move-workspace
        - select-workspace
      - widgets
        - assignments
          - assignment-docket
          - assignments
          - common-assignments
            - assignment-actions
              - bulk-reassign-modal
              - create-assignment-modal
              - update-assignment-modal
            - assignment-filters
            - assignment-info-modal
              - create-subsequent-decision-panel-modal
              - promote-to-appeal-modal
            - assignment-search
          - work-queues
            - bulk-complete
        - case-dockets
          - appeals-case-docket
          - common-docket
            - docket-filters
          - judges-docket
            - judge-search
            - total-cases
          - pending-paneling
          - view-case-docket
        - crediting
          - common-crediting
            - credit-filters
            - credit-search
            - credit-summary
            - range-picker
          - judge-credits
          - paralegal-operations-crediting
            - paralegal-selector
            - pay-period-picker
            - production-credit-actions
              - edit-credits-modal
              - enter-credits-modal
          - patent-attorney-credits
            - patent-attorney-admin-actions
              - pga-admin-console-modal
        - general
          - announcement
            - announcement-search
            - show-details
          - my-favorites
          - quarterly-closeout
            - case-range
            - quarterly-closeout-action
              - quarterly-closeout-modal
          - report-center
          - system-status
        - widget-actions
        - widget-card
      - workspace-actions
      - workspaces
        - five-column
        - four-column
        - full-view
        - left-column
        - right-column
        - three-column
        - two-column
- constants
- environments
- guards
- interceptors
- models
- pipes
- services


### _Workspaces_

- Configure all 7 workspace types
- Add workspace from tab
- Add workspace from Actions dropdown
- Manage workspace
- Delete workspace

---

### _Widgets_

- Develop all widgets
- Add widget modal
- Delete widget
- Move widget
- Customize widget


