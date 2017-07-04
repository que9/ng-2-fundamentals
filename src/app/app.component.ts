import { Component, ViewEncapsulation } from "@angular/core";
@Component({
  selector:'app-root',
  encapsulation:ViewEncapsulation.Native,
  templateUrl:'./app.component.html',
  styles:[
    `
      h1.foo{
        color:orange;
      }
    `
  ]
})

export class AppComponent {
  private title = "Hi, this app is running :)";
  
  onTabChanged(tabTitle:string){
    console.info( "On Changed", tabTitle );
  }

}
