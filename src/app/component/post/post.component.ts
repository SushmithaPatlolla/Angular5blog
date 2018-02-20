import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service'
import { Post } from '../../models/post';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 mes:string
 post: Post
 posts : Post[] 
  constructor(private postService : PostService, private router : Router) { }

  ngOnInit() {
    this.post={
      title: "",
      titleDesc: ""
    }
    
  }

  sendPost(){
   this.postService.sendPost(this.post).subscribe(post => {
     this.mes ="post saved"
     this.router.navigate(['/posts'])
   })
  }


}
