import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NotificationService } from './messages/notification.service';

@NgModule({
	declarations: [
		InputComponent,
		RadioComponent,
		RatingComponent,
		SnackbarComponent
	],
	// O que eu vou precisar dentro destes componentes
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	// Quem vou exportar para utilizar fora deste modulo
	exports: [
		InputComponent,
		RadioComponent,
		RatingComponent,
		SnackbarComponent,
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				ShoppingCartService,
				OrderService,
				RestaurantsService,
				NotificationService
			]
		}
	}
}