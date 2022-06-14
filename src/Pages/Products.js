import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  //Getting data from local database
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('http://localhost:5000/products');
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className='product-select-buttons'>
          <button
            className='btn btn-outline-dark'
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct("men's clothing")}
          >
            Men
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct('jewelery')}
          >
            Jewelery
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct('electronics')}
          >
            Electronics
          </button>
        </div>
        <div className='product__cards'>
          <div className='product__cards__container'>
            <div className='product__cards__wrapper'>
              <div className='product__cards__items'>
                {filter.map((product) => {
                  return (
                    <div className='product__cards__item' key={product.id}>
                      <div className='product__cards__item__body'>
                        <figure
                          className='product__cards__item__pic-wrap'
                          data-category={product.category}
                        >
                          <img
                            className='product__cards__item__img'
                            src={product.image}
                            alt=''
                          />
                        </figure>
                        <div className='product__cards__item__info'>
                          <h1 className='product__cards__item__text'>
                            {product.title.substring(0, 12)}...
                          </h1>
                          <p className='product__cards__item__text'>
                            ${product.price}
                          </p>
                          <NavLink
                            to={`/products/${product.id}`}
                            className='add-btn'
                          >
                            Buy Now
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
}

export default Products;
