import React from 'react'
import "./Navbar.css"
import { logout } from '../utils/auth';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const handleLogout = () => {
  // localStorage.removeItem("token");
  logout();
  <NavLink to='/' />
};

  return (
    <div className='navbar'>
      <h2>CRUDE_AUTH_WEB</h2>
        <ul>
            <li>
                {/* <Link to={"/"}>Home</Link> */}Home
            </li>
            <li>
                {/* <Link to={"/shop"}>Shop</Link> */}About
            </li>
        </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar
