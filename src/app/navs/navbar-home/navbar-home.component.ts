import { Component, OnInit, HostListener } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit {

  showNavScroll
  mtop = "mt-5";
  collapseMenuMobile = "hideMenuMobile"

  constructor() { }
  @HostListener("window:scroll", ['$event'])



  onWindowScroll(event) {
    
    if(event.path[1].scrollY == 0){
      
      this.showNavScroll = "bg-light"
      this.mtop = "mt-5"
  
    
    }else {
      this.showNavScroll = "bg-light"
      this.mtop = "mt-0"
    }


 
  }


  showMenuMobile(){
    if(this.collapseMenuMobile == "hideMenuMobile"){
      this.collapseMenuMobile = "showMenuMobile"
    } else {
      if(this.collapseMenuMobile ="showMenuMobile"){
        this.collapseMenuMobile = "hideMenuMobile"
      }
    }

    console.log("collapsou")

  }

  ngOnInit(): void {

  }


}
