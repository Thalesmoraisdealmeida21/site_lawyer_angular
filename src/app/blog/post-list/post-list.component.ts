import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private BlogService: BlogService) { }

  posts: Post[];

  ngOnInit(): void {
    this.getAllPost();
    this.resumeDescricao();
  }

  getAllPost(){
    this.BlogService.getAllPosts().subscribe((posts: Post[])=>{
      this.posts = posts
      this.posts.forEach(function(post: Post){
      

      post.descResum = post.descricao.toString().substring(0, 200)
        console.log(post.descResum);
    
      })
    })
  }


  resumeDescricao(){
    
  }

}
