import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MatPaginator, MatSort, MatSortable, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  // Can be observed for changes in the rendering of the table.
  @ViewChildren('table') renderChecker: QueryList<any>;

  // Enables the sorting controls on the table.
  @ViewChild(MatSort) sort: MatSort;
  // Enables the pagination control on the table.
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Emits when the user clicks on a table row.
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

  // Array of user readable table headers.
  @Input() headers = [];
  // Array of models of which data can be displayed in the table.
  @Input() models = [];
  // Aray of attributes of the models that should be displayed in the table.
  @Input() attributes = [];
  // Array of formatting functions to be applied to the model data.
  @Input() formatters = [];
  // Array of widths to be applied to the table columns (in percentages).
  @Input() widths = [];
  // Toggles the visibility of the pagination control.
  @Input() pagination = true;
  // Toggles the visibility of the search control.
  @Input() search = true;
  // Toggles the visibility of the sort controls.
  @Input() sortable = true;
  // Toggles the hoverable rows feature.
  @Input() hoverable = true;
  // Toggles the shadows.
  @Input() shadows = true;
  // Sort the table by this column
  @Input() sortBy = 'id';
  // Sort the table by this direction
  @Input() sortDirection = 'asc';
  // Array of strings to match colors to
  @Input() rowColorText = {};
  // Attribute to retrieve color text from
  @Input() rowColorAttribute;

  // Array of colors for rows
  private rowColors = {
    success: '#28a745',
    warn: '#ffc107',
    problem: '#dc3545',
    error: '#791a23'
  };

  // Datasource the table will use. Will be filled with model data.
  dataSource = new MatTableDataSource();

  constructor() { }

  ngOnInit() {
    this.loadTableData();
  }

  ngAfterViewInit() {
    // Initializes the paginator.
    this.dataSource.paginator = this.paginator;
    this.configureSort();
    this.configureFilter();
    this.loadEventHandlers();
    this.loadWidths();
  }

  // Applies a filter on the table. Executed when the user types in the search bar.
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Fires when the user clicks on one of the table rows. Passes the model
  // from the clicked row.
  onRowClicked(model) {
      this.clickEvent.emit({ model: model });
  }

  // Renders the user readable data in the table with functions inside
  // of the formatters input array.
  renderContent(model, attribute) {
    const formatterIndex = this.attributes.indexOf(attribute);
    const content = model[attribute];
    if (formatterIndex >= this.formatters.length) {
        return content;
    }
    return this.formatters[formatterIndex](content);
  }

  // Configures the data the sorting algorithm will use to sort with.
  // This data can differ from the user readable data in the table.
  private configureSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (model, property) => model[property];
  }

  private configureFilter() {
    this.dataSource.filterPredicate = (model, filter) => {
      const accumulatorFunction = (currentTerm, key) => currentTerm + this.renderContent(model, key);
      const accumulatedStringToFilter = this.attributes.reduce(accumulatorFunction, '').toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return accumulatedStringToFilter.indexOf(transformedFilter) !== -1;
    };
  }

  public getRowColor(model) {
      const colorDecidingValue = model[this.rowColorAttribute];
      const colorId = this.rowColorText[colorDecidingValue];
      return colorId === undefined ? 'transparent' : this.rowColors[colorId];
  }

  // Loads the event handlers of the table.
  private loadEventHandlers() {
    // Checks if there are changes in the rendering of the table.
    // If there are, widths will be reloaded.
    this.renderChecker.changes.subscribe(t => {
        this.loadWidths();
    });
  }

  // Populates the table with data from the models.
  private loadTableData() {
    this.dataSource.data = this.models;
  }

  // Loads the widths defined by the widths input.
  // If it is blank, the material table default widths will be used.
  private loadWidths() {
    // If there were no widths defined, do nothing.
    if (this.widths.length === 0) {
        return;
    }

    // Array of table headers (th).
    const headerColumns = <NodeListOf<HTMLElement>>document.querySelectorAll('mat-header-row mat-header-cell');
    // Array of table rows (tr).
    const rows = <NodeListOf<HTMLElement>>document.querySelectorAll('mat-row');

    // Adds a percentage width from the widths array and sets flex to none for the
    // table headers.
    for (let i = 0; i < headerColumns.length; i++) {
        headerColumns[i].style.width = this.widths[i] + '%';
        headerColumns[i].style.flex = 'none';
    }

    // Adds a percentage width from the widths array and sets flex to none for all
    // of the remaining table cells.
    for (let i = 0; i < rows.length; i++) {
        const row = <NodeListOf<HTMLElement>>rows[i].querySelectorAll('mat-cell');
        for (let j = 0; j < row.length; j++) {
            row[j].style.width = this.widths[j] + '%';
            row[j].style.flex = 'none';
        }
    }
  }

}
