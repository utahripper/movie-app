import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'loginPassword': new FormControl('', Validators.required)
    });
  }

  login() {
    return this.auth.login().subscribe((res)=> {
      console.log(res);
    });
  }

}