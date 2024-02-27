// // auth.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // Add logic for login here
    console.log('Login clicked');
  }

  signup() {
    // Add logic for signup here
    console.log('Signup clicked');
  }
}
