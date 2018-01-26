import { CustomPipe } from './custom.pipe';
import { CourcesService } from './cources.service';
import { BrandsComponent } from './brands.component';
import { CourcesComponent } from './cources.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent,
    BrandsComponent,
    CoursesComponent,
    CustomPipe,
    FavoriteComponent,
    StarComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
