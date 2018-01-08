/**
 * Created by yangshibin on 2017/11/13.
 */
import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import {AppService} from "../app.service";

@Component({
  templateUrl: './news-page.html',
  styleUrls: ['./newspage.css']
})

export class NewsPageComponent implements OnInit, AfterViewInit {
  newsList = [];
  constructor(private router: Router, private elm: ElementRef, public appService: AppService) {}
  ngOnInit() {
    this.newsList = [{img: 'assets/image/imgNews.png', title: {zh: '最近新闻', en: 'Latest news'}, summary: {zh: `Even Duterte himself has been accused of ordering a journalist to be killed. Two former policemen alleged earlier this year that Duterte,
            while mayor of Davao City in 2003,paid tens of thousands of dollars to have radio broadcaster
            Juan Pala murdered. Duterte denied the accusations.`, en: `Even Duterte himself has been accused of ordering a journalist to be killed. Two former policemen alleged earlier this year that Duterte,
            while mayor of Davao City in 2003,paid tens of thousands of dollars to have radio broadcaster
            Juan Pala murdered. Duterte denied the accusations.`}, content: ''},
      {img: 'assets/image/imgNews.png', title: {zh: '最近新闻', en: 'Latest news'}, summary: {zh: `Even Duterte himself has been accused of ordering a journalist to be killed. Two former policemen alleged earlier this year that Duterte,
            while mayor of Davao City in 2003,paid tens of thousands of dollars to have radio broadcaster
            Juan Pala murdered. Duterte denied the accusations.`, en: `Even Duterte himself has been accused of ordering a journalist to be killed. Two former policemen alleged earlier this year that Duterte,
            while mayor of Davao City in 2003,paid tens of thousands of dollars to have radio broadcaster
            Juan Pala murdered. Duterte denied the accusations.`}, content: ''},
      {img: 'assets/image/imgNews.png', title: {zh: '最近新闻', en: 'Latest news'}, summary: {zh: `Even Duterte himself has been accused of ordering a journalist to be killed. Two former policemen alleged earlier this year that Duterte,
            while mayor of Davao City in 2003,paid tens of thousands of dollars to have radio broadcaster
            Juan Pala murdered. Duterte denied the accusations.`, en: `Even Duterte himself has been accused of ordering a journalist to be killed. Two former policemen alleged earlier this year that Duterte,
            while mayor of Davao City in 2003,paid tens of thousands of dollars to have radio broadcaster
            Juan Pala murdered. Duterte denied the accusations.`}, content: ''}
    ];}
  ngAfterViewInit() {
    this.setSliderHeight();
    Observable.fromEvent(window, 'resize')
      .debounceTime(100) // 以免频繁处理
      .subscribe((event) => {
        // console.log(document.body.clientWidth);
        // 这里处理页面变化时的操作
        this.setSliderHeight();
      });
  }
  // 设置首页轮播图片的高度
  setSliderHeight() {
    const slider = this.elm.nativeElement.querySelector('.mr-pic-slider');
    if (slider) {
      const width = slider.clientWidth;
      slider.style.height = width * 0.52 + 'px';
    }
  }
  routeGo() {
    this.router.navigateByUrl('home');
  }


}
