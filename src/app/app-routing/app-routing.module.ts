import { NgModule } from '@angular/core';
import {PostsComponent} from './../component/posts/posts.component'
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from '../component/post/post.component';
import { LoginComponent } from '../component/login/login.component';
import { SignupComponent } from '../component/signup/signup.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'post', component: PostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SignupComponent },
]

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
