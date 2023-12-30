import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from './product';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = 'http://localhost:3000';
  selectedProductForCheckout!: product;
  razorPayKeyconfig=".../../../../../assets/configs/keys.json";
  private apiUrl = 'http://api.example.com/orders';

  constructor(private http: HttpClient,private router:Router) {}

  createOrder(orderData: any): Observable<any> {
    const url = `${this.apiUrl}/create`;
    return this.http.post(url, orderData);
  }

  getOrder(orderId: string): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.get(url);
  }

  updateOrder(orderId: string, orderData: any): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.put(url, orderData);
  }

  deleteOrder(orderId: string): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.delete(url);
  }
  placeOrder(items: any[]): Observable<any> {

    return new Observable<any>(observer => {

      setTimeout(() => {
        const orderResponse = { status: 'success', message: 'Order placed successfully' };
        observer.next(orderResponse);
        observer.complete();
      }, 2000);
    });
  }
  buyNow(product: any) {
    this.router.navigate(['/my-orders'], { state: { product: product}});
}

}
