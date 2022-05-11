import Button from 'src/common/Button';

import productsErrorStyles from './productsError.module.scss';

interface IProps {
  retryFn: () => void;
}

const ProductsError = (props: IProps) => {
  return (
    <>
      <h3>Something happened</h3>
      <Button
        className={productsErrorStyles.retry_button}
        onClick={props.retryFn}
      >
        Retry
      </Button>
    </>
  );
};

export default ProductsError;
