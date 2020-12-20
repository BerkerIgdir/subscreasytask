import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/resource';
  private message:string = "";
  
  constructor(private httpClient:HttpClient) { }

  getUser(): Observable<User>{
    return this.httpClient.get<User>(this.baseUrl);
  }

  authenticate(username:string, password:string)  {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<JsonCons>('http://localhost:8080/api/validatelogin',{headers}).pipe(
      map(
        json => {
         sessionStorage.setItem('username',username);
         this.message = json.message;
         return json.message;
        }
      )
     );
      }
      
  public createUser(user:User) {
    return this.httpClient.post<JsonUser>("http://localhost:8080/api/newuser", user);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    console.log("Log out has been called")
  }

}
interface JsonCons{

  message:string

}

interface JsonUser{

  message:string
  user:User;

}