import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.sass"]
})
export class PaginationComponent {
  @Input() total_pages: number; /*Itis the total pages number which it is been used to create divs with number pege. This variable came from the father's componet  */
  @Output() page = new EventEmitter<number>();/*This is the variable which is sended to its father using (.imit) */

  constructor() {}
  currentPage = 1;
  

  ngOnInit() {
    /* console.log("-------------", this.total_pages); */
  }

  updatePage(pageNumber) {
    this.currentPage = pageNumber;
    this.page.emit(pageNumber);
    /* console.log(pageNumber,"-------", this.currentPage); */
  }
}
