import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
@Input() isFavoriate=false;
@Output() clicking=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  strClick(){
    this.isFavoriate=!this.isFavoriate;
    this.clicking.emit({newValue:this.isFavoriate});
  }

}

export interface starInterface{
newValue:boolean;
}
