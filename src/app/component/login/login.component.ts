import { Component, OnInit } from '@angular/core';
import {logindetails} from '../../models/logindetails'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 log : logindetails

  constructor() { }

  ngOnInit() {
    this.log = {
      name : "",
      password : ""
    }
  }
  login(){
    
    
  }

}
