import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/Action';
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className='col-md-6'>
          <Skeleton height={400} />
        </div>
        <div className='col-md-6'>
          <Skeleton height={50} width={300} />
          <Skeleton height={50} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className='product-image col-md-6'>
          <img
            className='product-image'
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className='col-md-6'>
          <h4 className='product-category text-uppercase'>
            {product.category}
          </h4>
          <h2 className='product-title'>{product.title}</h2>
          <p className='product-rating'>
            Rating {product.rating && product.rating.rate}
            <i className='fa fa-star'></i>
          </p>
          <h3 className='product-price'>$ {product.price}</h3>
          <p className='product-description'>{product.description}</p>
          <button className='add-ct-btn' onClick={() => addProduct(product)}>
            Add to Cart
          </button>
          <NavLink to='/cart' className='ct-btn'>
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
