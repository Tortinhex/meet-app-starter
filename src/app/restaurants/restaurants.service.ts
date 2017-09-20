import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Restaurant } from './restaurant/restaurant.model';
import 'rxjs/add/operator/map';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestaurantsService {
	
	constructor(
		private http: Http
	) {}

	/**
	 * Retorna os restaurantes
	 */
	restaurants(): Observable<Restaurant[]> {
		return this.http
			.get(`${MEAT_API}/restaurants`)
			.map(response => response.json());
	}

}