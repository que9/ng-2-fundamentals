import { Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
@Directive({
	selector:'[unless]'
})

export class UnlessDirective{
	@Input('unless') set unless(condition:Boolean){
		// if(!condition)
		// 	this.vcRef.createEmbededView( this.tempRef );		
		// else
		// 	this.vcRef.clean();
	}
	// constructor( private tempRef:TemplateRef<any>, private vcRef:ViewContainerRef ){
	// 	console.info("YES");
	// }
}