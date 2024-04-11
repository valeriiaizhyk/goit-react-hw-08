import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const isActive = ({ isActive }) => {
    return clsx(isActive && css.active);
  };

  return (
    <div className={css.div}>
      <NavLink to="/register" className={isActive}>
        Register
      </NavLink>
      <NavLink to="/login" className={isActive}>
        Log In
      </NavLink>
    </div>
  );
}
