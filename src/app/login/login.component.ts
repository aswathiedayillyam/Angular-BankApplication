import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Perfect Banking Partner"
  account="Account Number Please"
  AccountDetails= {
    1000: { accno: 1000, pswd: "user1", balance: 5000, username:"user1"},
    1001: { accno: 1001, pswd: "user2", balance: 3000, username:"user2"},
    1002: { accno: 1002, pswd: "user3", balance: 10000, username:"user3"},
    1003: { accno: 1003, pswd: "user4", balance: 15000, username:"user4"},
}

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    alert("Login Clicked");
  }

}
