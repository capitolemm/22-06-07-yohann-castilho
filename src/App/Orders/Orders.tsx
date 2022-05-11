import { useAppSelector } from 'src/redux/hooks';

import { selectProductsData } from 'src/redux/products/products.selectors';
import { calcProductsTotal } from 'src/utils/products';

import ordersStyles from './orders.module.scss';

const Orders = (props: any) => {
  const orders = [];
  const products = useAppSelector(selectProductsData);

  if (orders.length === 0) {
    return (
      <div className={ordersStyles['order__no-items']}>There are no orders</div>
    );
  }

  return (
    <div>
      <div className={ordersStyles.order__items}>
        {orders.map((order: any, index: any) => {
          return (
            <div className={ordersStyles.order} key={'order' + index}>
              <h2>Pedido nº{index + 1}</h2>
              {Object.values(order).map((orderProduct: any, index) => {
                return (
                  <div className={ordersStyles.order__item} key={index}>
                    <img src={products[orderProduct.id].imageUrl} alt='' />
                    <p>{products[orderProduct.id].title}</p>
                    <div className={ordersStyles.price__container}>
                      <h4>{products[orderProduct.id].price}€</h4>
                      <p className={ordersStyles.quantity__order}>
                        x {orderProduct.quantity}
                      </p>
                    </div>
                  </div>
                );
              })}
              <h3 className={ordersStyles.total}>
                Total {calcProductsTotal(products, order)}€
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Orders.defaultProps = {
  products: {},
  orders: [],
};

export default Orders;
