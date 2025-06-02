import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const NavLinks = () => {
  const { user } = useContext(AuthContext);

  const linkClass = ({ isActive }) =>
    isActive
      ? "active text-nav dark:text-ivory text-2xl xl:text-3xl font-extrabold"
      : "font-medium xl:text-lg text-nav dark:text-ivory hover:text-[#536493] dark:hover:text-base-300";

  return (
    <>
      <NavLink to="/" className={linkClass}>
        <i>Home</i>
      </NavLink>
      <NavLink to="/services" className={linkClass}>
        <i>Services</i>
      </NavLink>
      {user && (
        <>
          <NavLink to="/addService" className={linkClass}>
            <i>Add Service</i>
          </NavLink>
          <NavLink to="/myServices" className={linkClass}>
            <i>My Services</i>
          </NavLink>
          <NavLink to="/myReviews" className={linkClass}>
            <i>My Reviews</i>
          </NavLink>
        </>
      )}
      <NavLink to="/packages" className={linkClass}>
        <i>Service Packages</i>
      </NavLink>
    </>
  );
};

export default NavLinks;
