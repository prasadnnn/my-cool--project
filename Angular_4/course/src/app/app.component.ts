import { starInterface } from './star/star.component';
import { FavoriteComponent, favoriteComponentInterfaceArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  post={
    isFavorite:false
  }
  favoriateChange(eventArgs:favoriteComponentInterfaceArgs){
    
    console.log('favoriate clicked',eventArgs)
  }
  starClicked(eventArgs:starInterface){
    console.log('star clicked',eventArgs)
  }
}


