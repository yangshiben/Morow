/**
 * Created by yangshibin on 2017/12/7.
 */

import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AppService} from "../app.service";
import { Observable } from 'rxjs';

@Component({
  templateUrl: './about-page.html',
  styleUrls: ['./aboutpage.css']
})

export class AboutPageComponent implements OnInit, AfterViewInit {
  aboutUs = {zh: '', en: ''}
  constructor(private router: Router, private elm: ElementRef, public appService: AppService) {}
  ngOnInit() {
    this.aboutUs.zh = `微合资本是由来自美国，中国，香港，新加坡的优秀资本家所创立的专业投资机构。我们专注于亚洲及大中华区的高成长性企业投资，
    旨在推动高新科技的创业创新，致力于发现优秀创业者，孵化创业项目，为企业提供最有价值的资金资源帮助，实现，分享创业成果。
    投资阶段覆盖初创期、成长期、成熟期等各个阶段，投资规模从上百万美元到上亿美元不等。`;
    this.aboutUs.en = `Wemerge ventures is an organisation comprising of talented capital management personnel from America, China,
     Hong Kong and Singapore. Our primary focus is to seek and invest in potential start-ups and business in the Asia Pacific region
      including China. Our team of experts are proficient in managing high tech organisations and also revolutionizing traditional 
      businesses. By investing heavily and working with competent entrepreneurs and organisations, we strive to create value and 
      impart critical management skills to our partners to materialize their vision, dreams and share the results of our combined efforts. 
     Our phase of investments ranges from seed funding to private equity and our investment quantum ranges from millions to trillions of dollars.`;
  }
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
