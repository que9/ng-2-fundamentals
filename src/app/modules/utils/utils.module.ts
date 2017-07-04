import { NgModule } 		from '@angular/core';
import { CommonModule } 	from '@angular/common';

import { FiltersComponent } from './filters/filters.component';
import { TabsComponent } 	from './tabs/tabs.component';
import { TabComponent } 	from './tabs/tab.component';
import { FiltersService }   	from "./filters/filters.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ FiltersComponent, TabsComponent, TabComponent ],
  providers:[ FiltersService ],
  exports:[ FiltersComponent, TabsComponent, TabComponent ]
})

export class UtilsModule { }