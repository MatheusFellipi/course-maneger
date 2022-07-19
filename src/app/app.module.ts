import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourserListComponent } from './courses/course-list.component';
import { StarComponent } from './courses/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CourserListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
