import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartOrderService {
  orderItems: any[] = [];

  constructor() { }

  placeOrder(items: any[]): void {
    this.orderItems = [...items];
  }

  getOrderItems(): any[] {
    return this.orderItems;
  }
}
