/**
 * Created by yangshibin on 2017/12/7.
 */

import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  templateUrl: './about-page.html',
  styleUrls: ['./aboutpage.css']
})

export class AboutPageComponent implements OnInit, AfterViewInit{
  constructor(private router: Router, private elm: ElementRef) {}
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  routeGo() {
    this.router.navigateByUrl('home')
  }

}
