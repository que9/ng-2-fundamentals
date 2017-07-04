import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'template-form',
  template: `
    <div>
      <h1>Template Driven {{dataSent}}</h1>
      <form (ngSubmit)="onSubmit( form )" #form="ngForm">
        <div ngModelGroup='group'>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" [ngModel]="user.username">
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="text" class="form-control" required name="email" [ngModel]="user.email" id="email" #email="ngModel">            
            <template [ngIf]="email.invalid">
              <div>Please give valid email</div>
            </template>            
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" name="password" [ngModel]="user.password">
        </div>
        <div class="radio" *ngFor="let c of colors">          
          <label>
            {{c}} <input type="radio" [(ngModel)]="user.color" name="color" [value]="c" /> 
           </label>
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Submit</button>
      </form>
    </div>
  `,
  styles: []
})

export class TemplateFormComponent implements OnInit {
  private form:NgForm;
  dataSent:string = "Nothing is sent yet";
  private colors:Array<string> = ['red','blue','tomato','cornflowerblue','orange'];
  private user:Object = {
    username:'gkjha009',
    email   :'gkjha009@gmail.com',
    password:'any@pass',
    color   :'red'
  };

  ngOnInit() {
    console.info("init");
    // this.dShare.pushData.subscribe((data:string) =>{
    //     console.info('in subscribe method', data);
    //     this.dataSent = data;
    // })
  }

  onSubmit( form:NgForm ){
    console.info("onSubmit :)", form, this.user );
  }  
}