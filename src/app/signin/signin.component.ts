import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {



constructor(private router: Router) {}

  
  navigateToHome() {
    this.router.navigate(['/home']); 
  }
  navigateToLogin() {
    this.router.navigate(['/login']); 
  }
}
