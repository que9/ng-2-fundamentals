import { Directive, ElementRef, Renderer } from "@angular/core";
import { HostListener, HostBinding, Input, EventEmitter, Output } from "@angular/core";

@Directive({
	selector:'[hightlight]'
})

export class HighlightDirective{
	@Input('hightlight') hightlightColor:string = "blue";
	@Input('default') 	 defaultColor   :string = "yellow";
	
	//@ Function is called every time
	@HostBinding("style.backgroundColor") get changeBGColor(){
		return this.bgColor;
	}

	@HostListener("mouseenter") onMouseEnter(){
		this.bgColor = this.hightlightColor;
		console.info( this.hightlightColor,  this.bgColor );
	};

	@HostListener("mouseleave") onMouseLeave(){
		this.bgColor = this.defaultColor;
		console.info( this.defaultColor,  this.bgColor );
	};

	@HostListener("mousemove") function(){
		console.info("--");
	};

	bgColor:string = this.defaultColor;
	constructor( private el:ElementRef, private re:Renderer ){
	 	// @BADASS
	 	// this.el.nativeElement.style.backgroundColor = "skyblue";
	 	let NE = this.el.nativeElement;

	 	this.re.setElementClass(NE, 'yes-class', true);
	 	this.re.setText(NE, 'setText works');
	 	this.re.setBindingDebugInfo(NE, "WTF", "Used only in debug mode to serialize prop change to DOM");
	}

	ngOnInit(){
		// This hook is called when property binding is done
		try{
			if( !this.hightlightColor.trim() )
				this.hightlightColor = "blue";
		}
		catch(Ex){
			console.info(Ex);
		}
		this.bgColor = this.hightlightColor;
	}
}




