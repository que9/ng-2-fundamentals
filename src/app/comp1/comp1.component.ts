import { Component, OnInit } from '@angular/core';
import { FiltersService } from "../modules/utils/filters/filters.service";

@Component({
  selector: 'comp1',
  template: `
    <div>
      <div *ngFor="let d of data">{{d.name}}</div>
    </div>
  `,
  styles: []  
})
export class Comp1Component implements OnInit {
  data = [
    {name:'Apple'},
    {name:'Banana'},
    {name:'Guava'},
    {name:'ABC'},
    {name:'PINE Apple'}
  ];

  constructor( private filterSrv:FiltersService) {
    console.info("comp1#", this.filterSrv.getSelectedFilter);
  }

  ngOnInit() {
    this.filterSrv.a_z.subscribe((data)=>{
      console.info("Comp1", data )
    });
    this.filterSrv.date.subscribe((data)=>{
      console.info("Comp2", data )
    });
  }

}
