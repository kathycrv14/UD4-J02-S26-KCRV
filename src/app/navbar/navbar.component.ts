import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AutenticationService } from '../services/autentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuariologueado = false;
  
  constructor(private breakpointObserver: BreakpointObserver, public autentication: AutenticationService) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit(){
      this.usuariologueado = this.autentication.isLoggedIn();
      this.autentication.changeLoginStatus$.subscribe(
      (loggedSatus: boolean) => this.usuariologueado = loggedSatus
      );
      }
  
  logout(){
    this.autentication.logout();
  }

}
