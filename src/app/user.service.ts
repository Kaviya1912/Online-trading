import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

interface User {
  username: string;
  email: string;
  mobileno: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  clearUserInfo() {
    throw new Error('Method not implemented.');
  }
  userInfo: User | null = null;

  constructor(private client: HttpClient) { }


  addUserInformation(body: any) {
    return this.client.post("http://localhost:3000/users", body);
  }


  getUser(): Observable<User[]> {
    const url = "http://localhost:3000/users";
    return this.client.get<User[]>(url);
  }


  setUserInfo(user: User) {
    this.userInfo = user;
  }

  
}

