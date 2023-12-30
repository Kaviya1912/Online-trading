import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = false;
  private storageKey = 'isLoggedIn';
  private user:any;

constructor(
  private cartservice:CartService,private router:Router
) { }
login(user: any): void {
  this.loggedIn = true;
  this.user = user;

  const pendingCartItem = sessionStorage.getItem('pendingCartItem');
  if (pendingCartItem) {
    const item = JSON.parse(pendingCartItem);
    this.cartservice.addToCart(item);
    sessionStorage.removeItem('pendingCartItem');
  }


  sessionStorage.setItem(this.storageKey, 'true');
  sessionStorage.setItem('user', JSON.stringify(user));
}

isUserLoggedIn():any{
  return this.user;
}
logoutUser():void{
  alert("Are you sure you want to log out?");
    this.loggedIn = false;
  
    sessionStorage.removeItem(this.storageKey);
    sessionStorage.removeItem('user');
    this.cartservice.clearCart();
    this.router.navigate(['/home']);
}
isLoggedIn(): boolean {
  return this.loggedIn;
}

}
