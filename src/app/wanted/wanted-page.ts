/**
 * Created by yangshibin on 2017/11/13.
 */
import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import {AppService} from "../app.service";

@Component({
  templateUrl: './wanted-page.html',
  styleUrls: ['./wantedpage.css']
})

export class WantedPageComponent implements OnInit, AfterViewInit {
  infobanList = [];
  wantedInfo = '';
  wantedInfoEn = '';
  constructor(private router: Router, private elm: ElementRef, public appService: AppService) {}
  ngOnInit() {
    this.infobanList = [1, 2, 3, 4, 5, 6];
    this.wantedInfo = `微合资本成功投资了数家具有企业家精神，期望改变社会、创造价值的优秀企业。在欣喜地看到这些公司快速成长的同时，我们也希望能搭建一个
    广罗人才的平台，邀请同样具有创新力和企业家精神的您加入我们的被投公司。微合资本愿意成为优秀创业者脚下的路，通往未来梦想的桥梁。如果你渴望去创造未来，
    如果你勇于开拓去实现梦想，那么请毫不犹豫地选择加入我们的微合大家庭!`;
    this.wantedInfoEn = `Wemerge Ventures has already successfully invested in several outstanding projects that want to change the world
     we live in and create value. As we are pleased to see that these companies are growing rapidly, we also hope to build a stage for a 
     wide range of talents and invite likeminded innovative and motivated personnel to join us and shine brightly with us. Wemerge Ventures
      is willing to become the stepping stone of excellent entrepreneurs and be the bridge that leads you to your dreams. If you are eager 
      to mould the future, if you have the courage to live your dreams, do not hesitate to choose to join the Wemerge Family and we walk 
      this path together with you!`;
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
