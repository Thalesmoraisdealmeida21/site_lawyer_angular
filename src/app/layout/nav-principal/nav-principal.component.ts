import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-principal',
  templateUrl: './nav-principal.component.html',
  styleUrls: ['./nav-principal.component.scss']
})
export class NavPrincipalComponent implements OnInit {

  showNavScroll
  mtop = "mt-5";

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

  constructor() { }

  ngOnInit(): void {
  }

}
