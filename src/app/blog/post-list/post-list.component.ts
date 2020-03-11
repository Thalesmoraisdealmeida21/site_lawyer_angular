import { Component, OnInit, HostListener } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/interfaces/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  AllPosts: Post[];
  pages: number[] = [];
  showLoader: boolean = true;

  constructor(private BlogService: BlogService, private ActivatedRoute: ActivatedRoute) { 
    this.ActivatedRoute.params.subscribe((params)=>{
      console.log(params['page'])
      this.getAllPost(params['page'])
    })

  }


  



  ngOnInit(): void {
  

    this.countPosts();
    

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    
 }




  getAllPost(page){
    this.showLoader = true
    this.BlogService.getAllPosts(page).subscribe((posts: Post[])=>{
      this.posts = posts
      if(posts){
        this.showLoader = false
      }
      this.posts.forEach(function(post: Post){
      

      post.descResum = post.descricao.toString().substring(0, 100)
      
    
      })
    })
  }


  countPosts(){

    this.BlogService.countPosts().subscribe((postsCounteds: Post)=>{
    
  
        let numberPages = postsCounteds.count / 3;
       
       
        for(let i =1;i < numberPages + 1; i++){
          this.pages.push(i)

    
        }

        console.log(this.pages);

    })
  }



}
