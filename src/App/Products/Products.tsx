import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/redux/hooks';

import { addProductThunk } from 'src/redux/cart/cart.thunks';
import {
  selectProductsData,
  selectProductsStatus,
} from 'src/redux/products/products.selectors';
import ProductCard from 'src/common/ProductCard';
import { getProducts } from 'src/redux/products/products.thunks';

import ProductsError from './ProductsError';
import ProductsPending from './ProductsPending';

import productsStyles from './products.module.scss';

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductsData);
  const productsStatus = useAppSelector(selectProductsStatus);

  const dispatchGetProducts = () => {
    if (productsStatus !== 'SUCCESS') dispatch(getProducts());
  };

  useEffect(dispatchGetProducts, []); // eslint-disable-line

  return (
    <div className={productsStyles.products__layout}>
      {productsStatus === 'PENDING' && <ProductsPending />}
      {productsStatus === 'SUCCESS' &&
        Object.values(products).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addItem={() => dispatch(addProductThunk({ id: product.id }))}
          />
        ))}
      {productsStatus === 'ERROR' && (
        <ProductsError retryFn={dispatchGetProducts} />
      )}
    </div>
  );
};

export default Products;
