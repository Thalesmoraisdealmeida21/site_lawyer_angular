import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaAtuacaoService } from 'src/app/services/area-atuacao.service';

@Component({
  selector: 'app-area-atuacao-view',
  templateUrl: './area-atuacao-view.component.html',
  styleUrls: ['./area-atuacao-view.component.scss']
})
export class AreaAtuacaoViewComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private AreaAtuacaoService: AreaAtuacaoService) { }

  titlePage: string
  dataArea;
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params)=>{
        this.titlePage = params['name']
        this.AreaAtuacaoService.getByName(this.titlePage).subscribe((area)=>{
            this.dataArea = area;
        })

    })

    console.log(this.titlePage)
  }

  



}
