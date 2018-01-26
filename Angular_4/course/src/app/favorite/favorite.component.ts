import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
 constructor() { }
@Input('is-favoriate') isFavoriate:boolean;
@Output() change=new EventEmitter();
  ngOnInit() {
  }
  onChange(){
    this.isFavoriate=!this.isFavoriate;
    this.change.emit({newValue:this.isFavoriate});
  }

}

export interface favoriteComponentInterfaceArgs{
neValue:boolean;
}
