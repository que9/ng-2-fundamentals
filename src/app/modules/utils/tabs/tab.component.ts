import { Component, Input,  } from '@angular/core';
import { TabsComponent } from "./tabs.component";

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active">
      <!-- just a div with insertion point -->
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})

export class TabComponent {
  @Input() title:string           = "";
  @Input('active') active:boolean = false;
  private lastActive = this.active;

  constructor( parentComponent:TabsComponent ) {
    parentComponent.addTab( this );
  }
}
