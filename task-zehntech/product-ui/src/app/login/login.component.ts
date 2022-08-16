import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userName: FormControl = new FormControl('');
  public password: FormControl = new FormControl('');

  constructor(private router: Router) {}
  
  public login(): void {
    localStorage.setItem('isLoggedIn',"true") ;
    this.router.navigate(['']);
  }
}
