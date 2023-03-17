import { Action } from '@ngrx/store';

import { Cart } from '../../models';

export enum CartEnumActions {
  GetCartItems = '[Cart] Get Cart Items',
  GetCartSuccess = '[Cart] Get Cart Success',
  GetCartFail = '[Cart] Get Cart Fail',

  AddToCart = '[Cart] Add To Cart',
  AddToCartSuccess = '[Cart] Add To Cart Success',
  AddToCartFail = '[Cart] Add To Cart Fail',

  DeleteFromCart = '[Cart] Delete From Cart',
  DeleteFromCartSuccess = '[Cart] Delete From Cart Success',
  DeleteFromCartFail = '[Cart] Delete From Cart Fail',
}

//get
export class GetCart implements Action {
  public readonly type = CartEnumActions.GetCartItems;
}

export class GetCartSuccess implements Action {
  public readonly type = CartEnumActions.AddToCartSuccess;
  constructor(public payload: Cart[]) {}
}

export class GetCartFail implements Action {
  public readonly type = CartEnumActions.AddToCartFail;
  constructor(public payload: any) {}
}

//add
export class AddToCart implements Action {
  public readonly type = CartEnumActions.AddToCart;
  constructor(public payload: Cart) {}
}

export class AddToCartSuccess implements Action {
  public readonly type = CartEnumActions.AddToCartSuccess;
  constructor(public payload: Cart) {}
}

export class AddToCartFail implements Action {
  public readonly type = CartEnumActions.AddToCartFail;
  constructor(public payload: Cart) {}
}

//delete
export class DeleteFromCart implements Action {
  public readonly type = CartEnumActions.DeleteFromCart;
  constructor(public payload: number) {}
}

export class DeleteFromCartSuccess implements Action {
  public readonly type = CartEnumActions.DeleteFromCartSuccess;
  constructor(public payload: number) {}
}

export class DeleteFromCartFail implements Action {
  public readonly type = CartEnumActions.DeleteFromCartFail;
  constructor(public payload: any) {}
}

export type CartActions =
  | GetCart
  | GetCartSuccess
  | GetCartFail
  | AddToCart
  | AddToCartSuccess
  | AddToCartFail
  | DeleteFromCart
  | DeleteFromCartSuccess
  | DeleteFromCartFail;
