import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {
  showPassword = false;
  login_form!: FormGroup;
  constructor( private route: Router,private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.login_form = this._formBuilder.group({
      user_name: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login(){
    if (this.login_form.invalid) {
      this._snackBar.open('Username and Password required', 'Ok', {
        duration: 3000,
      })
    }
    else {
      this.route.navigate(['/admin/dashboard']);
    }
  }

  forgotPassword(){
    this.route.navigate(['/login/forgotPassword']);
  }
}
