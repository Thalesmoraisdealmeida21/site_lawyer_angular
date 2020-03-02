import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-content',
  templateUrl: './template-content.component.html',
  styleUrls: ['./template-content.component.scss']
})
export class TemplateContentComponent implements OnInit {

  constructor() { }

  @Input() titlePage: string

  ngOnInit(): void {
    
  }

}
