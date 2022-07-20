import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourserInfoComponent } from './courses/course-info.component';
import { CourserListComponent } from './courses/course-list.component';
import { StarComponent } from './courses/star/star.component';
import { Error404 } from './error404/Error-404.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ReplacePipe } from './piper/replace,pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourserListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404,
    CourserInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
      {
        path: 'courses',
        component: CourserListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CourserInfoComponent,
      },
      {
        path: '**',
        component: Error404,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
