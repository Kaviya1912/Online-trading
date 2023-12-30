import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class CartService {
private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
public cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();
private storageKey = 'cartItems';


constructor() {
const storedItems = sessionStorage.getItem(this.storageKey);
if (storedItems) {
this.cartItemsSubject.next(JSON.parse(storedItems));
} else {
this.cartItemsSubject.next([]); 
}

}


getCartItems(): Observable<any[]> {
return this.cartItemsSubject.asObservable();
}

addToCart(product: any) {
const existingItem = this.cartItemsSubject.getValue().find((item) => item.id === product.id);
if (existingItem) {
alert('Item already added to cart');
} else {
const currentItems = [...this.cartItemsSubject.getValue(), product];
this.cartItemsSubject.next(currentItems);
this.updateStorage(currentItems);
}
}

removeCartItem(itemId: number) {
const currentItems = this.cartItemsSubject.getValue();
const updatedItems = currentItems.filter((item) => item.id !== itemId);
this.cartItemsSubject.next(updatedItems);
this.updateStorage(updatedItems);
}

clearCart() {
this.cartItemsSubject.next([]);
this.updateStorage([]);
}

private updateStorage(items: any[]) {
sessionStorage.setItem(this.storageKey, JSON.stringify(items));
}
// updateTotalItem(): void {
//   this.updateStorage = this.currentItems.length;
//   this.getCartItems(this.items); // Update the cart items in the service
// }
}
