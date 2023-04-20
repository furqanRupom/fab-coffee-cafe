import React from "react";
import { useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import { CafeContext } from "../../../providers/AuthProviders";
import { FaUser, FaSignInAlt,FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(CafeContext);

  return (
    <header className="text-white bg-[#1f1c45]">
      <div className="flex items-center">
        <nav className="flex space-x-4 justify-between items-center text-2xl font-bold z-10  w-full mx-auto px-24">
          <h2 className="text-6xl font-bold p-6">Fab</h2>
          <div className="flex items-center space-x-5">
            <Link
              className="hover:bg-[#db341e] transition-colors   p-5 duration-500"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:bg-[#db341e] transition-colors  p-5 duration-500 "
              to="/register"
            >
              Register
            </Link>
            <Link
              className="hover:bg-[#db341e] transition-colors  p-5 duration-500 "
              to="/login"
            >
              Login
            </Link>
            <Link
              className="hover:bg-[#db341e] transition-colors  p-5 duration-500 "
              to="/orders"
            >
              Order
            </Link>
          </div>
          {user ? (
            <div className="flex space-x-3 items-center z-10 text-sm bg-opacity-25">
              <p>
                <FaUser />
              </p>
              <h1 className=""> {user.displayName}</h1>
              <div onClick={logOut} className="bg-red-500/50 p-3 flex items-center space-x-3 rounded">
              <button>Sign Out
              </button>
              <span className="mt-1"><FaSignOutAlt /></span>
              </div>



            </div>
          ) : (
            <div className="flex space-x-3 items-center z-10 bg-red-500/50 p-3 rounded-lg text-sm">
              <Link to="/login">Sign In </Link>
              <span className="mt-1">
                <FaSignInAlt />
              </span>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
