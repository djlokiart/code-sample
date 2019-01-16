import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username;
  public password;
  public error: any;

  constructor(
    private config: ConfigService,
    private router: Router
  ) { }

  login() {
    this.error = null;
    if (this.username && this.password) {
      this.config.sendRequest('POST', this.config.apiHost + '/api/token', {
        username: this.username,
        password: this.password
      }, {
        withCredentials: true
      }).subscribe((data: any) => {
        if (data.status === 200) {
          this.config.token = data.body.token;
          this.router.navigate(['/dashboard']);
        }
      }, (err) => {
        this.error = err.error.error_warning || 'Неизвестная ошибка';
      });
    }
  }
}
