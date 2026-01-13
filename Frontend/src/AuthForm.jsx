// import React, { useState } from 'react'

// export default function AuthForm() {
//   const [isLogin, setIsLogin] = useState(false);
//   return (
//     <div className='container'>
//       <div className='form-container'>
//         <div className="form-toggle">
//           <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
//           <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>
//         </div>
//         {isLogin ? <>
//           <div className='form'>
//             <h2>Login form</h2>
//             <input type='email' placeholder='Email' />
//             <input type='password' placeholder='Password' />
//             <a href="#">Forgot password</a>
//             <button>Login</button>
//             <p>Not a Member? <a href="#" onClick={() => setIsLogin(false)}>Signup now</a></p>
//           </div>
//         </> : <>
//           <div className='form'>
//             <h2>Signup Form</h2>
//             <input type='name' placeholder='Name' />
//             <input type='email' placeholder='Email' />
//             <input type='password' placeholder='Password' />
//             <input type='age' placeholder='Age' />
//             <button>Signup</button>
//           </div>
//         </>}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { signup, login } from "./services/auth.service";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: ""
  });

  // input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // signup handler
  const handleSignup = async () => {
    try {
      const res = await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        age: formData.age
      });
      alert(res.data.message);
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  // login handler
const handleLogin = async () => {
  try {
    const res = await login({
      email: formData.email,
      password: formData.password
    });

    // ⭐ TOKEN STORE
    localStorage.setItem("token", res.data.token);

    // ⭐ DASHBOARD REDIRECT
    window.location.href = "/";
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};


  return (
    <div className='container'>
      <div className='form-container'>

        {/* toggle buttons */}
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* LOGIN FORM */}
        {isLogin ? (
          <div className='form'>
            <h2>Login Form</h2>

            <input
              type='email'
              name="email"
              placeholder='Email'
              onChange={handleChange}
            />

            <input
              type='password'
              name="password"
              placeholder='Password'
              onChange={handleChange}
            />

            <a href="#">Forgot password</a>

            <button onClick={handleLogin}>Login</button>

            <p>
              Not a Member?
              <a href="#" onClick={() => setIsLogin(false)}> Signup now</a>
            </p>
          </div>
        ) : (
          /* SIGNUP FORM */
          <div className='form'>
            <h2>Signup Form</h2>

            <input
              type='text'
              name="name"
              placeholder='Name'
              onChange={handleChange}
            />

            <input
              type='email'
              name="email"
              placeholder='Email'
              onChange={handleChange}
            />

            <input
              type='password'
              name="password"
              placeholder='Password'
              onChange={handleChange}
            />

            <input
              type='number'
              name="age"
              placeholder='Age'
              onChange={handleChange}
            />

            <button onClick={handleSignup}>Signup</button>
          </div>
        )}

      </div>
    </div>
  );
}
