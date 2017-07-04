import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, 
  FormControl,
  Validators, 
  FormBuilder,
  FormGroupName,
  FormArrayName,
  FormControlName,
  FormArray 
} from "@angular/forms";

@Component({
  selector: 'rtforms',
  template: `
    <div>
      <h1>DDriven Form</h1>
      <form>
        <div formGroupName="data">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username">
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="text" class="form-control" 
             name="email" id="email" formControlName="email">             
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" 
          name="password" formControlName="password">
        </div>

        <div class="radio" *ngFor="let c of colors">          
          <label>
            {{c}} <input type="radio" formControlName="color" [value]="c"/> 
          </label>
        </div>
        
        <div formArrayName="hobbies">
          <div *ngFor="let hobby of user.controls.hobbies.controls; let i = index">
              <input type="text" formControlName = "{{i}}"/>
          </div>
        </div> 
        <button type="submit" class="btn btn-primary" [disabled]="user.invalid">Submit</button>        
        <button (click)="addHobby()">Add  hobby</button>
      </form>      

    </div>
  `,
  styleUrls: ['./rtforms.component.css']
})

export class RTFormsComponent implements OnInit {
  private colors:Array<string> = ['red','blue','tomato','cornflowerblue','orange'];
  private user:FormGroup;
  
  constructor( formBuilder:FormBuilder) {
    // Initializing the user form

  //   this.user = new FormGroup({
  //     'data': new FormGroup({
  //       'username': new FormControl('init',[Validators.required]),
  //       'email':    new FormControl('abG',[Validators.required, Validators.pattern('[a-z]')])
  //     }), 
  //     'password': new FormControl('abv',[Validators.required]),
  //     'color': new FormControl( this.colors[0] ),
  //     'hobbies': new FormArray([ 
  //       new FormControl('Hi there', [Validators.required]) 
  //      ])
  //   });

    this.user = formBuilder.group({
      "data":formBuilder.group({
        "username":["",[Validators.required, this.customeValidators]],
        "email":["", Validators.required]
      }),
      "password":["", Validators.required],
      "color":["blue"],
      "hobbies": formBuilder.array([
        ["hobbies", Validators.required],
        ["Another one", [Validators.required]]
      ])
    });

    this.user.valueChanges.subscribe( (data:any) => console.info(data) );
    this.user.statusChanges.subscribe((d:any)=>console.info('State', d));
  }




  ngOnInit() {
    //
  }

  addHobby(){
    (<FormArray>this.user.controls.hobbies).push( new FormControl('', [Validators.required]) );
  }

  onSubmit(){
    console.info( this.user );
  }

  customeValidators(control:FormControl):Object{
    if( control.value == "Demo" )
        return { demo:true };
    else
      return null;
  }

  asyncValidator(control:FormControl):Promise<any> {
    return new Promise((resolve,reject) =>{
      setTimeout(function(){
        if(control.value == "demo")
            resolve(true);
        else
            resolve(null);
      },300);
    });
  }
}

/*
 constructor(private http:Http){
  
 }
  
  getData(){
    return this.http.get("url");
  }

  this.myService.getData().subscribe((data)=>console.info(data));

*/

