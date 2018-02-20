import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import {Post} from '../models/post'
@Injectable()
export class PostService {
 Url = 'http://localhost:2000/post'
  constructor(private http: HttpClient) { }

  sendPost(post: Post) : Observable<Post>{
   return this.http.post<Post>(this.Url, post)
  }

  getPost() : Observable<Post[]>{
     return  this.http.get<Post[]>(this.Url)
  }  

  


}
