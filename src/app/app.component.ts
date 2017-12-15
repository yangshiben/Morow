import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  nowTab = 1;
  document = document;
  langShow = false;
  menuDrop = false;

  constructor(private router: Router, private activatesRoute: ActivatedRoute) {}

  ngOnInit() {
    this.routerWatcher();

  }
  // 监控路由变化，动态切换激活菜单
  routerWatcher() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatesRoute)
      .map(route => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .subscribe(event => {
        console.log('Navigation End!', event.routeConfig);
        let path = event.routeConfig.path;
        switch (path) {
          case 'home':
            this.nowTab = 1;
            break;
          case 'about':
            this.nowTab = 2;
            break;
          case 'group':
            this.nowTab = 3;
            break;
          case 'investment':
            this.nowTab = 4;
            break;
          case 'news':
            this.nowTab = 5;
            break;
          case 'wanted':
            this.nowTab = 6;
            break;
          case 'contact':
            this.nowTab = 7;
            break;
          default: this.nowTab = 1;
        }
      });
  }

  routeNav(route) {
    this.router.navigate([route])
  }
  isOnTop() {
    if (document.documentElement.scrollTop < 100) {
      return true;
    }
    return false;
  }
}
