import { Injectable } from '@angular/core';
import { Http , URLSearchParams , Response  } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
  private OauthLoginEndPointUrl = 'http://localhost:8080/devicemanagement/oauth/token';  // Oauth Login EndPointUrl to web API
  private clientId ='my-trusted-client';
  private clientSecret ='secret';

  constructor(public http: Http) {}

  login(username, password) : Observable<any> {
    console.log("obs");
    let params: URLSearchParams = new URLSearchParams();
    params.set('username', username );
    params.set('password', password );
    params.set('client_id', this.clientId );
    params.set('client_secret', this.clientSecret );
    params.set('grant_type', 'password' );

    return this.http.post(this.OauthLoginEndPointUrl , {
      search: params
    }).map(this.handleData)
      .catch(this.handleError);
  }

  private handleData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  public logout() {
    localStorage.removeItem('token');
  }
}