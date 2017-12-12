/**
 * Created by yangshibin on 2017/11/13.
 */
import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  templateUrl: './news-page.html',
  styleUrls: ['./newspage.css']
})

export class NewsPageComponent implements OnInit, AfterViewInit{
  constructor(private router: Router, private elm: ElementRef) {}
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  routeGo() {
    this.router.navigateByUrl('home')
  }

}
