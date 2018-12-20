import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DeviceListConfig, CategoryService } from '../../core';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  constructor(
    private categoriesService: CategoryService,
  ) {}

  listConfig: DeviceListConfig = {
    type: 'all',
    filters: {}
  };
  categories: Array<string> = [];
  @Output() filterData = new EventEmitter();
  
  ngOnInit() {
    this.categoriesService.getAll()
    .subscribe(categories => {
      console.log("categoriesFilter",categories);
      this.categories = categories;
    });
  }
  
  eventEmiter(type: string = '', filters: Object = {}){
    console.log("EVENT EMITER");
    this.listConfig = {type: type, filters: filters};
    this.filterData.emit(this.listConfig);
  }
}
