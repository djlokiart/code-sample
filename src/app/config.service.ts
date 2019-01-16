
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
export class ConfigService {
  get token() {
    return localStorage.token;
  }
  set token(token) {
    localStorage.token = token;
  }

  public apiHost = environment.apiHost;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public sendRequest(method, url, body, init?) {
    return this.http.request(new HttpRequest(method, url, body, init)).pipe(
      catchError(error => {
        if (error.status === 401) {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
        return observableThrowError(error);
      })
    );
  }
}
