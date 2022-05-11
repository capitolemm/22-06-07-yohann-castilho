import { useAppSelector, useAppDispatch } from 'src/redux/hooks';

import { removeProductThunk } from 'src/redux/cart/cart.thunks';
import { selectProductsData } from 'src/redux/products/products.selectors';
import { selectCart } from 'src/redux/cart/cart.selectors';
import { calcProductsTotal } from 'src/utils/products';
import { clearCart } from 'src/redux/cart/cart.slice';

import cartStyles from './cart.module.scss';
import Button from 'src/common/Button';

const Cart = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductsData);
  const cart = useAppSelector(selectCart);

  const isCartEmpty = Object.values(cart).length === 0;
  if (isCartEmpty)
    return (
      <div className={cartStyles.cart__footer}>
        There are no products in your the cart.
      </div>
    );

  const handleAddOrder = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className={cartStyles.cart__items}>
        {Object.values(cart).map((cartItem, index) => {
          const product = products[cartItem.id];

          return (
            <div className={cartStyles.cart__item} key={index}>
              <img src={product.imageUrl} alt='Product' />
              <p>{product.title}</p>
              <div className={cartStyles.price__container}>
                <h4>{product.price}€</h4>
                <p className={cartStyles.quantity}>x {cartItem.quantity}</p>
                <Button
                  className={cartStyles.remove}
                  onClick={() =>
                    dispatch(removeProductThunk({ id: product.id }))
                  }
                >
                  {cartItem.quantity > 1 ? '−' : '✕'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className={cartStyles.cart__footer}>
        <h2>Total: {calcProductsTotal(products, cart)}€</h2>
        <Button className={cartStyles.btn_buy} onClick={handleAddOrder}>
          Buy
        </Button>
      </div>
    </div>
  );
};

export default Cart;
