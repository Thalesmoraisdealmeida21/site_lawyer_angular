import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }


  getAllPosts(page){
      const url = environment.api + "/posts/" + page
      return this.http.get(url)
  }


  getOnePost(id){
    const url = environment.api + "/post/" + id

    return this.http.get(url);
  }


  countPosts(){
    const url = environment.api + "/posts/count"
    return this.http.get(url);
  }
}
