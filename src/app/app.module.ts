import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { PostComponent } from './component/post/post.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostService } from './services/post.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './component/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PostComponent,
    PostsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
