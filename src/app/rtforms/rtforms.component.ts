import { Component , OnInit } from "@angular/core";
import { FormGroup, FormArray, FormControl, FormBuilder, Validator } from "@angular/forms";

import { User }  from "./user.interface";
import { Theme } from "./user.interface";

@Component({
	selector:'rxform',
	templateUrl:'./form.html'
})

export class RXFormComponent implements OnInit{
	//? What is the purpose of interface
	user:User;
	// Standing data goes here
	public genders:Array<any> = [
		{value:'F', display:'Female'},
		{value:'M', display:'Male'}
	];

	//? What are generic interface and their usages
	public roles:Array<any> = [
		{value:'admin',  display:'Administrator'},
		{value:'guest',  display:'Guest'},
		{value:'custom', display:'Custom'}
	];

	//? How to convert the Theme interface in generic interface
	public themes:Theme[] = [
		{ backgroundColor:'black', fontColor:'white', display:'Dark'  },
		{ backgroundColor:'white', fontColor:'black', display:'Light' },
		{ backgroundColor:'grey',  fontColor:'white', display:'Sleek' }
	]

	public topics:Array<any> = [
		{value:'game', display:'Gaming'},
		{value:'tech', display:'Technology'},
		{value:'life', display:'LifeStyle'}
	];

	public toggles:Array<any> = [
		{value:'toggled', 	display:'Toggled'},
		{value:'untoggled', display:'UnToggled'}
	];

	constructor( private fb:FormBuilder ){
		//
	}

	ngOnInit(){
		this.user = new FormGroup(
				""
			);
		// Initializing the model
		// this.user = {
		// 	name	: 'No Name',				/* Input:String */
		// 	age 	: 50, 						/* Number:Number */
		// 	gender	: this.genders[0].value,	/* Radio */
		// 	role 	: null,						/* Select:Primitive */
		// 	theme	: this.themes[0],			/* Select:Object */
		// 	isActive: false,					/* Checkbox:Boolean */
		// 	topics	: [this.topics[1].value],	/* Multiple */
		// 	toggle	: this.toggles[1].value		/* Checkbox:String */
		// };
	}

	public save(){

	}


}