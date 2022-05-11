import { AppThunk } from 'src/redux/store';

import { selectCart } from './cart.selectors';
import { addProduct, removeProduct, updateProduct } from './cart.slice';
import { ICartProduct } from './cart.types';

export const addProductThunk =
  (payload: Pick<ICartProduct, 'id'>): AppThunk =>
  (dispatch, getState) => {
    const cartProducts = selectCart(getState());
    const productToAddId = payload.id;
    const productInCart = cartProducts[productToAddId];

    if (productInCart !== undefined) {
      dispatch(
        updateProduct({ ...payload, quantity: productInCart.quantity + 1 })
      );
    } else {
      dispatch(addProduct(payload));
    }
  };

export const removeProductThunk =
  (payload: Pick<ICartProduct, 'id'>): AppThunk =>
  (dispatch, getState) => {
    const cartProducts = selectCart(getState());
    const productToRemoveId = payload.id;
    const productInCart = cartProducts[productToRemoveId];

    if (productInCart.quantity > 1) {
      dispatch(
        updateProduct({ ...payload, quantity: productInCart.quantity - 1 })
      );
    } else {
      dispatch(removeProduct(payload));
    }
  };
