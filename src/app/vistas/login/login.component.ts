import { parseTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  formLogin = new FormGroup({
    Usuario: new FormControl ('',Validators.required) ,
    password: new FormControl ('',Validators.required)
  });

  ngOnInit(): void {
    
  }

  OnLogin(form:any){
    console.log(form);
  }
}