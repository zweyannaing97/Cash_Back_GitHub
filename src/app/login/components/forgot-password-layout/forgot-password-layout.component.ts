import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-layout',
  templateUrl: './forgot-password-layout.component.html',
  styleUrls: ['./forgot-password-layout.component.scss']
})
export class ForgotPasswordLayoutComponent implements OnInit {
  otp_form_valid: boolean = false;
  form!:FormGroup
  otp_page:boolean = false;
  constructor( private _formBuilder: FormBuilder, private route: Router ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      userName:  ['', Validators.required],
      mobileNumber: ['', Validators.required],
    });
  }

  formValidation(){
    if (this.form.invalid) {
     this.otp_form_valid = false;
    }
    else{
      this.otp_form_valid = true;
    }
  }

  otpSubmit(){
    this.route.navigate(['/login']);
  }

  cancelOTP() {
    this.route.navigate(['/login']);
  }
}
