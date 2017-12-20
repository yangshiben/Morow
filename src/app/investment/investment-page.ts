/**
 * Created by yangshibin on 2017/11/21.
 */
import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  templateUrl: './investment-page.html',
  styleUrls: ['./investment.css']
})

export class InvestmentComponent implements OnInit, AfterViewInit{
  infobanList = [];
  constructor(private router: Router, private elm: ElementRef) {}
  ngOnInit() {
    this.infobanList = [1, 2, 3, 4, 5, 6]
  }
  ngAfterViewInit() {
    this.setInvestHeight();
    this.setMotorImgHeight();
    this.setSliderHeight();
    Observable.fromEvent(window, 'resize')
      .debounceTime(100) // 以免频繁处理
      .subscribe((event) => {
        console.log(document.body.clientWidth);
        // 这里处理页面变化时的操作
        this.setInvestHeight();
        this.setMotorImgHeight();
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
  setInvestHeight() {
    const posters = this.elm.nativeElement.querySelectorAll('.invest-wrap');
    posters.forEach(value => {
      const width = value.clientWidth;
      value.style.height = width * 0.7143 + 'px';
    });
  }
  setMotorImgHeight() {
    const posters = this.elm.nativeElement.querySelectorAll('.invest-block-sm');
    posters.forEach(value => {
      const width = value.clientWidth;
      value.style.height = width * 0.6136 + 'px';
    });
  }
  routeGo() {
    this.router.navigateByUrl('home');
  }

}
