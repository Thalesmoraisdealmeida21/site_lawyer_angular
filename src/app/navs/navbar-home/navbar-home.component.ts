import { Component, OnInit, HostListener } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit {

  showNavScroll
  mtop = "5";
  constructor() { }
  @HostListener("window:scroll", ['$event'])

  onWindowScroll(event) {
    if(event.path[1].scrollY == 0){
      
      this.showNavScroll = "bg-light"
      this.mtop = "5"
    }else {
      this.showNavScroll = "bg-light"
      this.mtop = "0"
    }
  
  }
  ngOnInit(): void {

  }


}
