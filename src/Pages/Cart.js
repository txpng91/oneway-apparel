import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, deleteFromCart } from '../Redux/Action/index';

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(deleteFromCart(item));
  };

  const emptyCart = () => {
    return (
      <div className='px-4 my-5 bg-light rounded-3 py-5'>
        <div className='container py-4'>
          <div className='row'>
            <h3 className='Emp-Ct-Msg'>Your cart is empty. Start shopping!</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <div key={product.id}>
        <div className='px-4 bg-light rounded-3 py-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='check-out-product-image-container'>
                <img
                  className='check-out-product-image'
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className='col-md-4'>
                <h3 className='check-out-product-title'>{product.title}</h3>
                <p className='check-out-product-pricing'>
                  {product.qty} X ${product.price} = $
                  {parseFloat(product.qty * product.price)}
                </p>
                <button
                  className='reduce-btn'
                  onClick={() => handleDel(product)}
                >
                  <i className='fa fa-minus'></i>
                </button>
                <button
                  className='increase-btn'
                  onClick={() => handleAdd(product)}
                >
                  <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <NavLink to='/checkout' className='check-out-btn'>
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
