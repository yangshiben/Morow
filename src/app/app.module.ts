import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import {HomePageComponent} from './home/home-page';
import {RoutingModule} from "./routing.module";
import {GroupPageComponent} from "./group/group-page";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NewsPageComponent} from "./news/news-page";
import {WantedPageComponent} from "./wanted/wanted-page";
import {InvestmentComponent} from "./investment/investment-page";
import {AboutPageComponent} from "./about/about-page";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    }),
    RoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 export class AppModule { }
