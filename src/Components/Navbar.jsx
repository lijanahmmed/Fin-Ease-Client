import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-900 font-bold border-b-2" : "text-purple-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-transaction"
          className={({ isActive }) =>
            isActive ? "text-purple-900 font-bold border-b-2" : "text-purple-500"
          }
        >
          Add Transaction
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/my-transactions"
          className={({ isActive }) =>
            isActive ? "text-purple-900 font-bold border-b-2" : "text-purple-500"
          }
        >
          My Transactions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "text-purple-900 font-bold border-b-2" : "text-purple-500"
          }
        >
          Reports
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar md:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
            <img className="w-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT815NGXKz9w59G2GFzQbv18u8oXc0NxkLuLw&s" alt="" />
            <Link to="/" className="btn btn-ghost text-purple-900 text-xl">
          Fin Ease
        </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
          <Link
            className="btn bg-gradient-to-r from-purple-800 to-purple-500 text-white"
            to="/auth/login"
          >
            Login
          </Link>
          <Link
            className="btn bg-gradient-to-r from-purple-800 to-purple-500 text-white"
            to="/auth/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
