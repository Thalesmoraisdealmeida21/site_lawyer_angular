import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-atuacao-view',
  templateUrl: './area-atuacao-view.component.html',
  styleUrls: ['./area-atuacao-view.component.scss']
})
export class AreaAtuacaoViewComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute) { }

  titlePage: string
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params)=>{
        this.titlePage = params['name']
    })

    console.log(this.titlePage)
  }



}
