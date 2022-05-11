import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from 'src/common/NavBar';
import ErrorBoundary from 'src/common/ErrorBoundary';
import ErrorMessage from 'src/common/ErrorMessage';

import Products from './Products';
import Cart from './Cart';
import Orders from './Orders';

import './app.module.scss';

function App() {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='*' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
