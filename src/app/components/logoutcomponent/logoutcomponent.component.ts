import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logoutcomponent',
  templateUrl: './logoutcomponent.component.html',
  styleUrls: ['./logoutcomponent.component.css']
})
export class LogoutcomponentComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router) {

  }

  ngOnInit() {
    this.userService.logOut();
    this.router.navigate(['']);
  }


}

