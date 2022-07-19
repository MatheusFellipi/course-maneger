import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'course',
        pathMatch: 'full',
      },
      {
        path: 'course',
        component: CourserListComponent,
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
