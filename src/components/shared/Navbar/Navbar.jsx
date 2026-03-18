import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import nlogo from "../../../assets/slides/navLogo-modified.png";
import { AuthContext } from "../../../providers/AuthProvider";
import ThemeToggle from "../ThemeToggle";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="w-full fixed z-50">
      <div className="max-w-[1600px] mx-auto navbar backdrop-blur-xl bg-accent/30">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-ivory dark:bg-[#212121]
             rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
          <div id="logo" className="flex relative">
            <Link
              to="/"
              className="font-bold text-primary text-2xl md:text-3xl lg:text-5xl
            z-10
         "
            >
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={nlogo}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 items-center">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end items-center">
          <ThemeToggle></ThemeToggle>
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-900 
                rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a onClick={logOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <NavLink to="/login">
                <button className=" mr-4" title="login">
                  {/* login svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M42.22 17.31v-3.85A7.48 7.48 0 0 0 34.74 6h0a7.48 7.48 0 0 0-7.49 7.48v6a3.13 3.13 0 0 0 3.13 3.13h9a2.26 2.26 0 0 1 2.26 2.26v11A6.62 6.62 0 0 1 35 42.5h-4.2a3.53 3.53 0 0 1-3.55-3.5v-6.8c0-4.75-6.18-5.7-6.18-11.88V9.3h-8.48a6.81 6.81 0 0 0-6.81 6.82h0a3.48 3.48 0 0 0 3.48 3.48H12v15.69a7.21 7.21 0 0 0 7.21 7.21h11.56M12.04 25.54H6.89M19.25 42.5H8.55M21.07 9.3V5.5m-6.26 3.8V5.5"
                    />
                    <circle cx="13.3" cy="13.82" r=".75" fill="currentColor" />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m37.24 35.68l-1.78-3.88a2.07 2.07 0 1 0-1.65 0l-1.58 3.84Z"
                    />
                  </svg>
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
