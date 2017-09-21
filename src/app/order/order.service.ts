import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from 'app/order/order.model';
import { MEAT_API } from './../app.api';

@Injectable()
export class OrderService {

	constructor(
		private cartService: ShoppingCartService,
		private http: Http
	) {}

	cartItems(): CartItem[] {
		return this.cartService.items;
	}

	increaseQty(item: CartItem) {
		this.cartService.increaseQty(item);
	}

	decreaseQty(item: CartItem) {
		this.cartService.decreaseQty(item);
	}

	remove(item: CartItem) {
		this.cartService.remove(item);
	}

	itemsValue() {
		return this.cartService.total();
	}

	clear() {
		this.cartService.clear();
	}

	checkOrder(order: Order): Observable<Order> {
		const HEADERS = new Headers();
		HEADERS.append('Content-Type', 'application/json')
		
		return this.http.post(
			`${MEAT_API}/orders`, 
			JSON.stringify(order), 
			new RequestOptions({headers: HEADERS})
		).map(response => response.json());
	}
 
}