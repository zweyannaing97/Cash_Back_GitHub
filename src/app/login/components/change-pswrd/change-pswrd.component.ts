import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-pswrd',
  templateUrl: './change-pswrd.component.html',
  styleUrls: ['./change-pswrd.component.scss']
})
export class ChangePswrdComponent implements OnInit {

  constructor() { }
  form!:FormGroup

  ngOnInit(): void {
  }

}
