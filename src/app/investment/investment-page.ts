/**
 * Created by yangshibin on 2017/11/21.
 */
import {AfterViewInit, Component, ElementRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";

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
  }
  routeGo() {
    this.router.navigateByUrl('home')
  }

}
