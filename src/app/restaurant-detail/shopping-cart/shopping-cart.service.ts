import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

export class ShoppingCartService {

	items: CartItem[] = [];

	clear(): void {
		this.items = [];
	}

	add(item: MenuItem) {
		let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

		if(foundItem) {
			this.increaseQty(foundItem);
		} else {
			this.items.push(new CartItem(item))
		}
	}

	increaseQty(item: CartItem) {
		item.quantity = item.quantity + 1;
	}

	remove(item: CartItem) {
		this.items.splice(this.items.indexOf(item), 1);
	}

	decreaseQty(item: CartItem) {
		item.quantity = item.quantity - 1;

		if(0 === item.quantity) {
			this.remove(item);
		}
	}

	total(): number {
		return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
	}
}