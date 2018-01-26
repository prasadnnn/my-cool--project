import { CourcesService } from './cources.service';
import {Component} from "@angular/core";
@Component({
selector:'cource',
template:   `<h1>{{title}}</h1>
    <ul>
    <li *ngFor="let cource of cources">
    {{cource}}
    </li>
    </ul>
   <button class="btn btn-primary" [class.active]="isActive">Save</button>
  {{stringtxt|summary}}
  <input type="text" [(ngModel)]="email"/>
  <div>
  <span class="glyphicon" 
  [class.glyphicon-star]="isActive"
  [class.glyphicon-star-empty]="!isActive"
  (click)="onChange()"></span>
  </div>
  `  
})
export class CourcesComponent{
title="List Of Cources";
email;
stringtxt="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaammmmmmmmmmmmmmmmmmmmmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
cources;
isActive=false;
constructor(service:CourcesService){
    //let service=new CourcesService();
this.cources=service.getCources();

}
onChange(){

this.isActive=!this.isActive;
}
}