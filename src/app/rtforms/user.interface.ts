export interface User{
	name:string;		// input
	age?:number;		// Number:input
	gender?:string;		// Radio
	role?:string;  		// Select primitive
	theme?:Theme;		// Select (object)
	topics?:string[];  	// Multiple select
	isActive?:boolean;  // Checkbox
	toggle?:string;		// Checkbox toggle

}


export interface Theme{
	display:string;
	backgroundColor:string;
	fontColor:string;
}