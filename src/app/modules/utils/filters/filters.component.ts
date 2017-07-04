import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FiltersService } from "./filters.service";
import { Filters } from "./filters";

@Component({
  selector: 'filters',
  template: `
    <div>
      <article>
        <span>Sort by :</span>
        <a *ngIf="opts.dateFilter" href="javascript:void 0;" (click)="onDateFilterClick($event)">Date</a>
        <a *ngIf="opts.A_ZFilter"  href="javascript:void 0;" (click)="onAZFilterClick($event)"  >A-Z</a>
      </article> 
    </div>
  `,  
  styles: []
})

export class FiltersComponent implements OnInit {
  @Input('opts') options:any;
  opts:Filters;  

  constructor( private filterSrv:FiltersService) { }
  
  onDateFilterClick(){
    this.filterSrv.setActiveFilter('dateFilter');    
  }
  onAZFilterClick(){   
   this.filterSrv.setActiveFilter('A_ZFilter');
  }

  ngOnInit() {
    this.opts = this.filterSrv.getFilters;
    console.info( 'this.options', this.options );
  }

}
