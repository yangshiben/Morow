/**
 * Created by yangshibin on 2017/11/13.
 */
import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AppService} from "../app.service";
import { Observable } from 'rxjs';

@Component({
  templateUrl: './group-page.html',
  styleUrls: ['./grouppage.css']
})

export class GroupPageComponent implements OnInit, AfterViewInit {
  teamInfo = '';
  teamInfoEn = '';
  constructor(private router: Router,  private elm: ElementRef, public appService: AppService) {}
  ngOnInit() {
    this.teamInfo = `微合资本投资团队希望能通过我们的行业见地、投资经验和海内外资源，为优秀创业者提供资金支持和其他增值服务。
    这将更好地帮助我们同创业者并肩成长、共创伟业。`;
    this.teamInfoEn = `Team slogan: Wemerge Ventures team strives to provide financial support and other value-added services 
    for outstanding entrepreneurs. Together with our experts, we will provide industry insights, investment experience and leverage
     on our domestic and foreign resources. This will help us to grow with our partners and create great things for generations.`;
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

  }

}
