import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomePageComponent} from "./home/home-page";
import {RoutingModule} from "./routing.module";
import {GroupPageComponent} from "./group/group-page";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NewsPageComponent} from "./news/news-page";
import {WantedPageComponent} from "./wanted/wanted-page";
import {InvestmentComponent} from "./investment/investment-page";
import {AboutPageComponent} from "./about/about-page";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    GroupPageComponent,
    NewsPageComponent,
    WantedPageComponent,
    InvestmentComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
