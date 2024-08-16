import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link btn btn-link" to="/">🍕 Home</Link> 
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link btn btn-link" to="/profile">🔓 Profile</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link">🔒 Logout</button> 
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link btn btn-link" to="/login">🔐 Login</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-link" to="/register">🔐 Register</Link> 
              </li>
            </>
          )}
        </ul>
        <span className="navbar-text ml-auto">
          <Link to="/cart" className="btn btn-outline-info">🛒 Total: ${total.toLocaleString()}</Link> {/* Navega al Cart */}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
