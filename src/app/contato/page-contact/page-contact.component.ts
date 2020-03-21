import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {

  constructor() { }


  @HostListener('window:scroll', ['$event'])
  ngOnInit(): void {




  }



}
