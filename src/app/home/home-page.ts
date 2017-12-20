/**
 * Created by yangshibin on 2017/11/13.
 */
import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  templateUrl: './home-page.html',
  styleUrls: ['./homepage.css']
})

export class HomePageComponent implements OnInit, AfterViewInit {
  sliderPics = [];
  videoList = [];
  activePic = null;
  picIndex = 0;
  timer = null;
  scrollV = null;
  scrollPos = 0;
  translateValue = 0;
  constructor(private router: Router, private elm: ElementRef) {}
  ngOnInit() {
    this.sliderPics = [{id: 1, url: 'assets/image/imgHome.png'}, {id: 2, url: 'assets/image/home/homeads.jpg'},
      {id: 3, url: 'assets/image/home/homeads1.jpeg'}];
    this.videoList = [{id: 1, title: '视频标题', url: 'assets/image/home/life2.jpg'}, {id: 2, title: '视频标题', url: 'assets/image/home/life3.jpg'},
      {id: 3, title: '视频标题', url: 'assets/image/home/life2.jpg'}, {id: 4, title: '视频标题', url: 'assets/image/home/life3.jpg'},
      {id: 5, title: '视频标题', url: 'assets/image/home/life2.jpg'},{id: 6, title: '视频标题', url: 'assets/image/home/life3.jpg'},
      {id: 7, title: '视频标题', url: 'assets/image/home/life1.jpg'}];
    this.activePic = this.sliderPics[0];
  }
  ngAfterViewInit() {
    this.autoPlay();
    this.scrollV = this.elm.nativeElement.querySelector('#video_scroll');
    this.setPosterHeight();
    this.setSliderHeight();
    Observable.fromEvent(window, 'resize')
      .debounceTime(100) // 以免频繁处理
      .subscribe((event) => {
        console.log(document.body.clientWidth);
        // 这里处理页面变化时的操作
        this.setPosterHeight();
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
  setPosterHeight() {
    const posters = this.elm.nativeElement.querySelectorAll('.v-poster');
    posters.forEach(value => {
      const width = value.clientWidth;
      value.style.height = width * 0.5625 + 'px';
    });
  }
  // 视频滚动控制
  videoScrollCtrl(flag: number) {
    if (this.videoList.length <= 5) { return; }
    const screenW = document.body.clientWidth;
    let offset = screenW > 800 ? 25 : 100;
    if (flag < 0 && this.scrollPos > 0) {
      this.scrollPos--;
      this.translateValue = -(this.scrollPos * offset);
    }
    if (flag > 0 && this.scrollPos + 5 < this.videoList.length) {
      this.scrollPos++;
      this.translateValue = -(this.scrollPos * offset);
    }
  }
  routeNav(route) {
    this.router.navigateByUrl(route);
  }
  // 启动图片轮播
  autoPlay() {
    if (this.timer) {
     clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      if (this.picIndex == this.sliderPics.length - 1) {
        this.picIndex = 0;
      } else {
        this.picIndex++;
      }
      this.activePic = this.sliderPics[this.picIndex];
    }, 4500);
  }
  replayPic(pic) {
    this.activePic = pic;
    this.sliderPics.forEach( (value, index) => {
      if (value.id == pic.id) {
        this.picIndex = index;
        this.autoPlay();
      }
    });
  }

}
