import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service'
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts : Post[]
  constructor(private postService : PostService) { }

  ngOnInit() {
    this.getPost()
  }

  getPost(){
    this.postService.getPost().subscribe(data => {
        this.posts = data
    })
  }

}
