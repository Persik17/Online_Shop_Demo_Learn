import { Cart } from 'src/app/models/cart.model';

export interface CartState {
  cart: Cart[];
  currentCartItemId: number | null;
  cartTotalSum: number;
  cartCount: number;
  error: any;
}

export const initialCartState: CartState = {
  cart: [],
  currentCartItemId: 1,
  cartTotalSum: 0,
  cartCount: 0,
  error: null,
};
