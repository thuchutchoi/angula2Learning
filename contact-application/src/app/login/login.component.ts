import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }
  login(event, username, password) {

    event.preventDefault();
    this.loginService.login(username, password)
      .subscribe(
        response => {
          localStorage.setItem('token', response.access_token);
          console.log(response.access_token);
          //this.router.navigate(['/home']);
        },
        error => {
          alert(error);
        }
      );
  }
}
