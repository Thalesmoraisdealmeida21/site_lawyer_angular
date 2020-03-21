import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaAtuacaoService {

  constructor(private http: HttpClient) { }


  getAllAreas(){
    const url = environment.api + "/areas-atuacao/find"
    return this.http.get(url)
  }

  getByName(name){
    const url = environment.api + "/areas-atuacao/find/" + name
    return this.http.get(url);
  }
}
