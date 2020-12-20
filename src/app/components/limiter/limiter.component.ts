import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-limiter',
  templateUrl: './limiter.component.html',
  styleUrls: ['./limiter.component.css']
})
export class LimiterComponent implements OnInit {

  username:string = "";
  password:string = "";
  message:string = "";
  invalidLogin:boolean = false;
  constructor(private router:Router,private userServ:UserService) { }

  ngOnInit(): void {

  }

    authenticate(){
        this.userServ.authenticate(this.username,this.password).subscribe(  data => {
          this.router.navigate(['home'])
          this.invalidLogin = false
        },
        error => {
          alert("Either username or password is wrong!")
          this.invalidLogin = true
        });
    }
}
