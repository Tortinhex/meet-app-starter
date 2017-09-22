import { NgModule } from '@angular/core';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from '../order/order.service';

@NgModule({
	providers: [
		OrderService,
		ShoppingCartService,
		RestaurantsService
	]
})
export class CoreModule {}