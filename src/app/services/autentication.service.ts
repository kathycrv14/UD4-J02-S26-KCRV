import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UsersServicesService } from './users-services.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  user:any;
  constructor(private service: UsersServicesService,private http: HttpClient) { }

  
  readonly ISLOGGEDKEY = 'islogged';
  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  login(username: string, email: string): Observable<boolean> {
    return this.http.get<any[]>(environment.apiURL)
      .pipe(
        map(users => {
          const userExists = users.some(user => user.username === username && user.email === email);
          if(userExists){
          localStorage.setItem(this.ISLOGGEDKEY, 'true');
          this.changeLoginStatusSubject.next(true);
          }
          return userExists;
        })
      );
  }
  
  logout() {
    localStorage.removeItem(this.ISLOGGEDKEY);
    this.changeLoginStatusSubject.next(false);
  }

  isLoggedIn() {
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
    if (isLogged) {
      
      return true;
    }
    return false;
  }

}
