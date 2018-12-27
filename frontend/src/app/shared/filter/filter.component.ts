import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DeviceListConfig, CategoryService } from '../../core';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  constructor(
    private categoriesService: CategoryService
  ) {}

  listConfig: DeviceListConfig = {
    type: 'all',
    filters: {}
  };
  categories: Object = Array;
  @Output() filterData = new EventEmitter();

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(result => {
      console.log("GRAPH", result.data.categories);
      this.categories = result.data.categories;
    });
  }

  eventEmiter(type: string = '', filters: Object = {}) {
    console.log("EVENT EMITER");
    this.listConfig = { type: type, filters: filters };
    this.filterData.emit(this.listConfig);
  }
}
