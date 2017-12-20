import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import { Observable } from 'rxjs';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  nowTab = 1;
  document = document;
  langShow = false;
  menuDrop = false;
  usingLang = 1;

  constructor(private router: Router, private activatesRoute: ActivatedRoute,
              private translateService: TranslateService, private elm: ElementRef) {}

  ngOnInit() {
    this.routerWatcher();
    this.initLanguage();
  }
  ngAfterViewInit() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(100) // 以免频繁处理
      .subscribe((event) => {
        console.log(document.body.clientWidth);
        // 这里处理页面变化时的操作
        this.setSliderHeight();
      });
  }
  initLanguage() {
    // --- set i18n begin ---
    this.translateService.addLangs(['zh', 'en']);
    this.translateService.setDefaultLang('zh');
    // 获取当前浏览器环境的语言比如en、 zh
    const broswerLang = this.translateService.getBrowserLang();
    this.translateService.use(broswerLang.match(/en|zh/) ? broswerLang : 'zh');
    this.usingLang = 1;
    // --- set i18n end ---
  }
  setLanguage(lang) {
    this.langShow = false;
    this.usingLang = lang === 'zn' ? 1 : 2;
    this.translateService.use(lang);
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
    this.menuDrop = false;
    this.router.navigate([route]);
  }
  setSliderHeight() {
    const slider = this.elm.nativeElement.querySelector('.mr-pic-slider');
    if (slider) {
      const width = slider.clientWidth;
      slider.style.height = width * 0.52 + 'px';
    }
  }
  isOnTop() {
    if (document.documentElement.scrollTop < 100) {
      return true;
    }
    return false;
  }
}
