import { Component, OnInit } from '@angular/core';
import { FiltersService } from "../modules/utils/filters/filters.service";

@Component({
  selector: 'comp2',
  template: `
    <div>
      <div *ngFor="let d of data">{{d.name}}</div>
    </div>
  `,
  styles: []  
})
export class Comp2Component implements OnInit {
  data = [
    {name:'Apple 2'},
    {name:'Banana 2'},
    {name:'Guava 2'},
    {name:'ABC 2'},
    {name:'PINE Apple 2'}
  ];

  constructor( private filterSrv:FiltersService) {
    console.info("comp2#", this.filterSrv.getSelectedFilter);
  }

  ngOnInit() {
    this.filterSrv.a_z.subscribe((data)=>{
      console.info("Comp2", data )
    });
    this.filterSrv.date.subscribe((data)=>{
      console.info("Comp2", data )
    });
  }

}
