import { Injectable, Input, EventEmitter } 	from '@angular/core';
import { Filters }  	from "./filters";

@Injectable()
export class FiltersService {  
  @Input("opts") options:any;

  private opts:Filters = {
  	A_ZFilter  : true,
  	dateFilter : true
  };

  private selectedFilter:any = 'dateFilter';

  public date:EventEmitter<string> = new EventEmitter<string>();
  public a_z :EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {}
  
  public get getFilters() : Filters {
  	return  this.opts;
  }

  public set a_zFilter(flag : boolean) {
  	this.opts.A_ZFilter = flag;
  }

  public set dateFilter(flag : boolean) {
  	this.opts.dateFilter = flag;
  }

  public get getSelectedFilter() : string {
    return this.selectedFilter;
  }

  public setActiveFilter(v : string) {
    this.selectedFilter = v;

    switch (v) {
      case "dateFilter":
        this.date.emit( this.selectedFilter );
        break;
      case "A_ZFilter":
        this.a_z.emit( this.selectedFilter );
      break;
    }
  }

}
