import { Component, OnInit } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmPassword = '';
  user: User = {
    fullName: '',
    username: '',
    password: ''
  };
  forbiddenUsernames: string[];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user, this.confirmPassword);
  }
}
