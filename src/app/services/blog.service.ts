import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }


  getAllPosts(){
      const url = environment.api + "/posts"
      return this.http.get(url)
  }


  getOnePost(id){
    const url = environment.api + "/post/" + id

    return this.http.get(url);
  }
}
