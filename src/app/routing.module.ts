/**
 * Created by yangshibin on 2017/11/13.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {HomePageComponent} from './home/home-page';
import {AboutPageComponent} from './about/about-page';
import {GroupPageComponent} from './group/group-page';
import {NewsPageComponent} from './news/news-page';
import {WantedPageComponent} from './wanted/wanted-page';
import {InvestmentComponent} from './investment/investment-page';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'group', component: GroupPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'wanted', component: WantedPageComponent},
  {path: 'investment', component: InvestmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class RoutingModule{

}
