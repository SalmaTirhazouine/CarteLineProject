import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private users = [
    { email: 'salma@gmail.com', password: 'salma123' },
    { email: 'chaimae@gmail.com', password: 'chaimae123' }
   
  ];

  constructor() {}

  authenticateUser(email: string, password: string): boolean {
   
    const user = this.users.find(u => u.email === email && u.password === password);

    
    return !!user;
  }
}