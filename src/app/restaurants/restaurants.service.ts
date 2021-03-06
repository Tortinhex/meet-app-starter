import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { MEAT_API } from './../app.api';
import { ErrorHandler } from '../app.error-handler';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {
	
	constructor(
		private http: Http
	) {}

	/**
	 * Retorna os restaurantes
	 */
	restaurants(search?: string): Observable<Restaurant[]> {
		return this.http
			.get(`${MEAT_API}/restaurants`, {params: {
				q: search // q => parametro generico para busca no json-server
			}})
			.map(response => response.json())
			.catch(ErrorHandler.handleError);
	}
	
	/**
	 * Retorna apenas o Restaurante referente ao ID
	 * @param id 
	 */
	restaurantById(id: string): Observable<Restaurant> {
		return this.http
			.get(`${MEAT_API}/restaurants/${id}`)
			.map(response => response.json())
			.catch(ErrorHandler.handleError);
	}
	
	/**
	 * Retorna os reviews de cada restaurante idenficiado pelo ID
	 * @param id 
	 */
	reviewsOfRestaurant(id: string): Observable<any> {
		return this.http
			.get(`${MEAT_API}/restaurants/${id}/reviews`)
			.map(response => response.json())
			.catch(ErrorHandler.handleError);
	}

	menuOfRestaurant(id: string): Observable<MenuItem[]> {
		return this.http
			.get(`${MEAT_API}/restaurants/${id}/menu`)
			.map(response => response.json())
			.catch(ErrorHandler.handleError);
	}

}