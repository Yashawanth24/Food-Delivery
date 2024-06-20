import { useState } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from './useOnlineStatus';
import { useSelector } from "react-redux";

const Header = () => {
 
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-rose-100 px-4 py-2">
      {/* Logo */}
      <div>
        <img className="w-34 rounded-lg" src='./image/logo.jpg' alt="Logo" />
      </div>

      {/* Navigation and Actions */}
      <div className="flex items-center space-x-4">
        {/* Online Status */}
        <span className="text-sm">
          Online Status: {onlineStatus ? "🟢" : "🔴"}
        </span>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/" className="text-gray-800 hover:text-gray-500 font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-800 hover:text-gray-500 font-bold">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-gray-500 font-bold">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-gray-800 hover:text-gray-500 font-bold"
            >
              Cart ({cartItems.length})
            </Link>
          </li>
          <li>
            <Link
              to="/sign"
              className="text-white bg-slate-500 px-4 py-2 rounded-lg hover:bg-slate-600"
            >
             SIGN IN
            </Link>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Header;
