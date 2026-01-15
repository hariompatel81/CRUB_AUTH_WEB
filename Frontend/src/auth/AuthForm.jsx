import './AuthForm.css';
import React, { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState();

  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Signup</button>
        </div>
        {
          isLogin ? (
            <div className='form'>
              <h2>Login Form</h2>
              <input type="email" name='email' placeholder='Email' />
              <input type='password' name='password' placeholder='password' />

              <a href="#">Forgot password</a>

              <button>Login</button>

              <p>
                Not a number?
                <a href="#" onClick={() => setIsLogin(false)}>Signup Now</a>
              </p>
            </div>
          ) : (
            <div className='form'>
              <h2>Signup Form</h2>

              <input type='name' name='name' placeholder='Name' />
              <input type='email' name='email' placeholder='Email' />
              <input type='password' name='password' placeholder='Password' />
              <input type='number' name='age' placeholder='Age' />

              <button>Signup</button>

            </div>
          )
        }
      </div>
    </div>
  );
}
