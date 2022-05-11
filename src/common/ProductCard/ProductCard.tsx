import { IProduct } from 'src/redux/products/products.types';
import Button from 'src/common/Button';

import productStyles from './productCard.module.scss';

interface IProps {
  product: IProduct;
  addItem: () => void;
}

const ProductCard = (props: IProps) => (
  <div className={productStyles.product__card}>
    <div className={productStyles.card__details}>
      <img src={props.product.imageUrl} alt={props.product.title} />
      <div>
        <div className={productStyles.card__title}>
          <h2 className={productStyles.card__title}>{props.product.title}</h2>
        </div>
        <h2 className={productStyles.card__price}>{props.product.price}€</h2>
      </div>
    </div>
    <Button className={productStyles.card__add_btn} onClick={props.addItem}>
      Add to Cart
    </Button>
  </div>
);

export default ProductCard;
