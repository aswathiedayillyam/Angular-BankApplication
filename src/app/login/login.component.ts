import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Perfect Banking Partner"
  accno="Account Number Please";
  pswd="";
  AccountDetails:any= {
    1000: { accno: 1000, pswd: "user1", balance: 5000, username:"user1"},
    1001: { accno: 1001, pswd: "user2", balance: 3000, username:"user2"},
    1002: { accno: 1002, pswd: "user3", balance: 10000, username:"user3"},
    1003: { accno: 1003, pswd: "user4", balance: 15000, username:"user4"},
}


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ChangeAcc(event:any){
       this.accno = event.target.value;
       console.log(this.accno);

  }
  ChangePswd(event:any){
    this.pswd = event.target.value;
    console.log(this.pswd);

  }

  login(){
    
    var accno=this.accno;
    var pswd=this.pswd;

    let dataset = this.AccountDetails;

    if (accno in dataset) {
        if (pswd == dataset[accno]["pswd"]) {
            alert("Login Successful");
            this.router.navigateByUrl('dashboard');
        }
        else {
          alert("Invalid Password");
        }

    }
    else {
      alert("Invalid Account Number, Please Register");
    }
  }

}
