import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  
  username:string=""
  email:string="";

  constructor(private autentication: AutenticationService, private router: Router) { }
  
 onSubmit(){
    this.autentication.login(this.username, this.email)
    .subscribe(isLoggedIn => {
      if (isLoggedIn) {
        
        this.router.navigate(['/home']);
      } else {
        alert("Datos incorrectos")
      }
      
    });
   
}
}
