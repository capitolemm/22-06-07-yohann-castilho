import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { useAppSelector } from 'src/redux/hooks';

import { selectNumProducts } from 'src/redux/cart/cart.selectors';
import Button from 'src/common/Button';

import navBarStyles from './navBar.module.scss';

const NavBar = () => {
  const numProducts = useAppSelector(selectNumProducts);

  return (
    <nav>
      <Link className={navBarStyles.title} to='/'>
        ManoShop
      </Link>

      <div>
        <Link to='/'>
          <Button className={navBarStyles['link-btn']}>Products</Button>
        </Link>
        <Link to='/orders'>
          <Button className={navBarStyles['link-btn']}>Orders</Button>
        </Link>

        <Link to='/cart'>
          <Button className={navBarStyles['link-btn']}>
            {!!numProducts && (
              <span className={navBarStyles.number__products}>
                {numProducts}
              </span>
            )}
            <BsFillCartFill />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
