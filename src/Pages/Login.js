import React from 'react';

const Login = () => {
  return (
    <div className='login-page'>
      <div className='sign-in-container'>
        <form>
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

          <div className='form-floating'>
            <label htmlFor='floatingInput'>Email address</label>
            <input
              type='email'
              className='sign-in-input'
              id='floatingInput'
              placeholder='name@example.com'
            />
          </div>
          <div className='form-floating'>
            <label htmlFor='floatingPassword'>Password</label>
            <input
              type='password'
              className='sign-in-input'
              id='floatingPassword'
              placeholder='Password'
            />
          </div>

          <div className='checkbox mb-3'>
            <label>
              <input type='checkbox' value='remember-me' /> Remember me
            </label>
          </div>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Sign in
          </button>
        </form>
      </div>
      <div className='register-container'>
        <form>
          <h1 className='h3 mb-3 fw-normal'>Or you can register</h1>

          <div className='form-floating'>
            <label htmlFor='floatingInput'>Email address</label>
            <input
              type='email'
              className='sign-in-input'
              id='floatingInput'
              placeholder='name@example.com'
            />
          </div>
          <div className='form-floating'>
            <label htmlFor='floatingPassword'>Password</label>
            <input
              type='password'
              className='sign-in-input'
              id='floatingPassword'
              placeholder='Password'
            />
          </div>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
