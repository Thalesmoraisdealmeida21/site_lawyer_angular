import { Component, OnInit, Input } from '@angular/core';
import {MatFormField} from '@angular/material/form-field'
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss']
})
export class FormContatoComponent implements OnInit {

  constructor() { }

  @Input() title =  "Contato"
  @Input() size = '5'
  @Input() width = '300px'
  @Input() color


  ngOnInit(): void {
  }

}
