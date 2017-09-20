import { Restaurant } from './restaurant/restaurant.model';
import { RESTAURANTS } from './restaurants.mock';

export class RestaurantsService {
	
	constructor() {}

	restaurants(): Restaurant[] {
		return RESTAURANTS;
	}

}