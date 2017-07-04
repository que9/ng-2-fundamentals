import { Component, ViewChildren, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { TabComponent } from "./tab.component";

export interface tabInterface {
	title:string
};

@Component({
  selector: 'tabs',
  template: `
	<ul class="nav nav-tabs">
		<li *ngFor="let tab of tabs" (click)="tabChangeRequest($event, tab)" class="nav-item">
			<a class="nav-link" [ngClass]="{active:tab.active}" href="javascript:void 0;">{{tab.title}}</a>
		</li>
    </ul>      			
	<ng-content></ng-content>
  `,
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent{
	@Output('tabChanged') onTabChange:EventEmitter<string> = new EventEmitter<string>();
	//@ A Set collection that holds tabs
	private tabs:Set<TabComponent> = new Set<TabComponent>();
	//@ Refers to the last active tabs
	private activeTabRef:TabComponent = null;	

	constructor(private renderer:Renderer){}

	addTab(tab:TabComponent){
		if( this.tabs.size == 0 ){
			console.info("Making a tab active" , this.tabs.size, this.activeTabRef);
			tab.active	 		= true;
			this.activeTabRef 	= tab;
		}
		this.tabs.add( tab );
	}

	removeTab( tab:TabComponent ){
		return this.tabs.delete( tab );
	}

	tabChangeRequest( $event:Event, tab:TabComponent ){		
		if( !tab.active ){
			this.activeTabRef.active = false;
			tab.active 				 = true;
			this.activeTabRef 			= tab;
			this.onTabChange.emit( tab.title );
		}
	}
}
