import { BrowserModule }  			from "@angular/platform-browser";
import { HttpModule }     			from "@angular/http";
import { FormsModule, ReactiveFormsModule }    from "@angular/forms";
import { NgModule }       			from "@angular/core";
import { AppComponent }            	from './app.component';

import { UtilsModule } 				from "./modules/utils";
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations:[ AppComponent, Comp1Component, Comp2Component ],
  imports:[ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, UtilsModule ],
  providers:[],
  bootstrap:[ AppComponent ]
})

export class AppModule{}