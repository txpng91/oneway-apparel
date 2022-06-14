import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  var total = 0;
  var parseTotal = parseFloat(total);

  const cartList = (product) => {
    total = total + product.price * product.qty;
    parseTotal = parseFloat(total);
    return (
      <li
        className='list-group-item d-flex justify-content-between lh-sm'
        key={product.id}
      >
        <div>
          <h6 className='my-0'>{product.title}</h6>
          <strong className='text-muted'>{product.qty}</strong>
        </div>
        <span className='text-muted'>${product.price}</span>
      </li>
    );
  };

  return (
    <div className='login-page'>
      <div className='container'>
        <div className='row g-5 my-5'>
          <div className='col-md-5 col-lg-4 order-md-last'>
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
              <span className='text-primary'>Your Cart</span>
              <span className='cart-badge'>{state.length}</span>
            </h4>
            <ul className='list-group mb-3'>
              {state.map(cartList)}
              <li className='list-group-item d-flex justify-content-between'>
                <span>Total (USD)</span>
                <strong>{parseTotal}</strong>
              </li>
            </ul>

            <form className='card p-2'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Promo code'
                  spellCheck='false'
                  data-ms-editor='true'
                />
                <button type='submit' className='redeem-btn'>
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-7 col-lg-8'>
            <h4 className='mb-3'>Billing address</h4>
            <form className='sign-in-form needs-validation' noValidate=''>
              <div className='row g-3'>
                <div className='col-sm-6'>
                  <label htmlFor='firstName' className='form-label'>
                    First name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    placeholder='First Name'
                    spellCheck='false'
                    data-ms-editor='true'
                  />
                  <div className='invalid-feedback'>
                    Valid first name is required.
                  </div>
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='lastName' className='form-label'>
                    Last name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    placeholder='Last Name'
                    spellCheck='false'
                    data-ms-editor='true'
                  />
                  <div className='invalid-feedback'>
                    Valid last name is required.
                  </div>
                </div>

                <div className='col-12 my-2'>
                  <label htmlFor='username' className='form-label'>
                    Username
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>@</span>
                    <input
                      type='text'
                      className='form-control'
                      id='username'
                      placeholder='Username'
                      required=''
                      spellCheck='false'
                      data-ms-editor='true'
                    />
                    <div className='invalid-feedback'>
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className='col-12 my-2'>
                  <label htmlFor='email' className='form-label'>
                    Email <span className='text-muted'>(Optional)</span>
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='you@example.com'
                  />
                  <div className='invalid-feedback'>
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className='col-12 my-2'>
                  <label htmlFor='address' className='form-label'>
                    Address
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address'
                    placeholder='1234 Main St'
                    required=''
                    spellCheck='false'
                    data-ms-editor='true'
                  />
                  <div className='invalid-feedback'>
                    Please enter your shipping address.
                  </div>
                </div>

                <div className='col-12 my-2'>
                  <label htmlFor='address2' className='form-label'>
                    Address 2 <span className='text-muted'>(Optional)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address2'
                    placeholder='Apartment or suite'
                    spellCheck='false'
                    data-ms-editor='true'
                  />
                </div>

                <div className='col-md-5 my-2'>
                  <label htmlFor='country' className='form-label'>
                    Country
                  </label>
                  <select className='form-select' id='country' required=''>
                    <option value=''>Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid country.
                  </div>
                </div>

                <div className='col-md-4 my-2'>
                  <label htmlFor='state' className='form-label'>
                    State
                  </label>
                  <select className='form-select' id='state' required=''>
                    <option value=''>Choose...</option>
                    <option>Florida</option>
                    <option>Virginia</option>
                    <option>Texas</option>
                    <option>Tennessee</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please provide a valid state.
                  </div>
                </div>

                <div className='col-md-3 my-2'>
                  <label htmlFor='zip' className='form-label'>
                    Zip
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='zip'
                    placeholder=''
                    required=''
                    spellCheck='false'
                    data-ms-editor='true'
                  />
                  <div className='invalid-feedback'>Zip code required.</div>
                </div>
              </div>

              <hr className='my-4' />

              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='same-address'
                />
                <label className='form-check-label' htmlFor='same-address'>
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='save-info'
                />
                <label className='form-check-label' htmlFor='save-info'>
                  Save this information htmlFor next time
                </label>
              </div>

              <hr className='my-4' />

              <h4 className='mb-3'>Payment</h4>

              <div className='my-3'>
                <div className='form-check'>
                  <input
                    id='credit'
                    name='paymentMethod'
                    type='radio'
                    className='form-check-input'
                    required=''
                  />
                  <label className='form-check-label' htmlFor='credit'>
                    Credit card
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    id='debit'
                    name='paymentMethod'
                    type='radio'
                    className='form-check-input'
                    required=''
                  />
                  <label className='form-check-label' htmlFor='debit'>
                    Debit card
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    id='paypal'
                    name='paymentMethod'
                    type='radio'
                    className='form-check-input'
                    required=''
                  />
                  <label className='form-check-label' htmlFor='paypal'>
                    PayPal
                  </label>
                </div>
              </div>

              <div className='row gy-3'>
                <div className='col-md-6'>
                  <label htmlFor='cc-name' className='form-label'>
                    Name on card
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='cc-name'
                    placeholder=''
                    required=''
                    spellCheck='false'
                    data-ms-editor='true'
                  />
                  <small className='text-muted'>
                    Full name as displayed on card
                  </small>
                  <div className='invalid-feedback'>
                    Name on card is required
                  </div>
                </div>

                <div className='col-md-6'>
                  <label htmlFor='cc-number' className='form-label'>
                    Credit card number
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='cc-number'
                    placeholder=''
                    required=''
                    spellCheck='false'
                    data-ms-editor='true'
                  />
                  <div className='invalid-feedback'>
                    Credit card number is required
                  </div>
                </div>

                <div className='col-md-3'>
                  <label htmlFor='cc-expiration' className='form-label'>
                    Expiration
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='cc-expiration'
                    placeholder=''
                    required=''
                    spellCheck='false'
                    data-ms-editor='true'
                  />
                  <div className='invalid-feedback'>
                    Expiration date required
                  </div>
                </div>

                <div className='col-md-3'>
                  <label htmlFor='cc-cvv' className='form-label'>
                    CVV
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='cc-cvv'
                    placeholder=''
                    required=''
                    spellCheck='false'
                    data-ms-editor='true'
                  />
                  <div className='invalid-feedback'>Security code required</div>
                </div>
              </div>

              <hr className='my-4' />

              <button className='w-100 btn btn-primary btn-lg' type='submit'>
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
