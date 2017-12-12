/**
 * Created by yangshibin on 2017/11/13.
 */
import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  templateUrl: './wanted-page.html',
  styleUrls: ['./wantedpage.css']
})

export class WantedPageComponent implements OnInit, AfterViewInit{
  infobanList = [];
  constructor(private router: Router, private elm: ElementRef) {}
  ngOnInit() {
    this.infobanList = [1, 2, 3, 4, 5, 6]
  }
  ngAfterViewInit() {
  }
  routeGo() {
    this.router.navigateByUrl('home')
  }

}
