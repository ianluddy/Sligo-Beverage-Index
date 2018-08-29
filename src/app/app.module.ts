import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import { DetailsComponent } from './components/details/details.component';
import { CoffeeIndexComponent } from './components/coffee-index/coffee-index.component';
import { BeerIndexComponent } from './components/beer-index/beer-index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailsComponent,
    CoffeeIndexComponent,
    BeerIndexComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCzrGkbVbn7ITUbsAr1WwXNEb38Qp83xkk",
      libraries: ["places"]
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
