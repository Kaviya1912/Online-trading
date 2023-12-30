import { Component, OnInit, Renderer2 } from '@angular/core';
import { OrderService } from '../order.service';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
// import { loadStripe, Stripe, StripeCardElement, StripeCardNumberElement } from '@stripe/stripe-js';
// import { environment } from 'environment';


@Component({
  selector: 'app-my-orders',
    templateUrl: './my-orders.component.html',
    styleUrls: ['./my-orders.component.css']
  })
  export class MyOrdersComponent implements OnInit{
    orderId: string = '';

    product: any;
  orderData: any;
  public total: number = 0;
  public totalItem: number = 0;

  initializeStripe: any;



  constructor(private apiservice:ApiService,private userService:UserService,private renderer:Renderer2,private router:Router) {
    this.renderer.setStyle(document.body,'background-color','#FEA3AA')
  }


  async ngOnInit(): Promise<void> {

   this.product = history.state.product;
   await this.initializeStripe();
  }



  plus(product: any): void {
    product.quantity++;

  }


  minus(product: any): void {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }
  placeOrder(): void {

    this.router.navigate(['/payment']);
  }
  cancelOrder(): void {
    alert("Your order has been canceled successfully.");
    this.router.navigate(['/home']);
  }
  buyNow(item: any): void {
    this.router.navigate(['/my-orders'], { state: { product: item } });
  }

}
