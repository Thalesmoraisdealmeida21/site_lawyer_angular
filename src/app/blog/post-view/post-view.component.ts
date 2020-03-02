import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor(private BlogService: BlogService, private ActivatedRoute: ActivatedRoute) { }

  post: Post
  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe((parameters)=>{
      this.getOnePost(parameters['idPublicacao'])
     
    })
  }
  

  getOnePost(idPost){
    this.BlogService.getOnePost(idPost).subscribe((post: Post)=>{
        this.post = post
    })

  }


  

}
