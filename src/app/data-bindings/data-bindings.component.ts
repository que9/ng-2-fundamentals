import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { DataShareService } from "../shared/data-share.service";

@Component({
  selector: 'data-bindings',
  template: `
    <div>
      <h4>Data Bindings</h4>
      <input type="text" [ngClass]="{hiClass:true}" [value]="'Nice'"/>
      <span [ngStyle]="{color:'blue'}">Attribute directives</span>
      <span [class.anyClass]="true">outsideResult : {{outsideResult}}</span>
      <button (click)="onClick()">Trigger CEvent</button>

      <nav>
        <ul>
          <li *ngFor="let rec of records">{{rec}}</li>
        </ul>
      </nav>

      <input type="text" [(ngModel)]="record" highlight >
      <button (click)="addRec()">Add more records</button>
    </div>
  `,
  styles: [
    `
       input{border:none; padding:5px; }
    `
  ]  

})

export class DataBindingsComponent {
  // This meta data makes outsideResult property bindable from outside
  @Input() outsideResult : number = 0;
  @Output("clickable")    customeEvent:EventEmitter<string> = new EventEmitter<string>();

  private records:Array<any> = [];
  private record:string = "";

  constructor(){}  

  onClick($event){
     this.customeEvent.emit("Message coming from DataBinding.Component");
  }

  addRec(){
    if( (this.record.trim()).length ){
      this.records.push( this.record );
      this.record = "";
    }
  }
}
