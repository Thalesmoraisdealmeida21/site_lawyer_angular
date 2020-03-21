import { Component, OnInit } from '@angular/core';
import { AreaAtuacaoService } from '../services/area-atuacao.service';

@Component({
  selector: 'app-areas-atuacao',
  templateUrl: './areas-atuacao.component.html',
  styleUrls: ['./areas-atuacao.component.scss']
})
export class AreasAtuacaoComponent implements OnInit {

  constructor(private AreasAtuacaoService: AreaAtuacaoService) { }
  areas
  ngOnInit(): void {
    this.getAllAreas();
  }


  getAllAreas(){
      this.AreasAtuacaoService.getAllAreas().subscribe((areas)=>{
          this.areas = areas
      })
  }

}
