import { Injectable, EventEmitter } from '@angular/core';
import { LogServiceService } from "./log-service.service";

@Injectable()
export class DataShareService {
  pushData:EventEmitter<string> = new EventEmitter<string>();
  private data:Array<any> = [];
  constructor() { 
  }

  add(val:string){
  	this.data.push(val);
  	console.info('Add called');
  	this.push(val);
  }

  get getData():Array<any>{
  	return this.data;
  }

  push(val:string){
  	console.info('Push called');
  	this.pushData.emit(val);
  }
}
