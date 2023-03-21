import { NavLink } from "react-router-dom";

export default function Nav({ isOpen }) {
  return (
    <nav className={isOpen ? "open" : ""}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/reservations"
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/order"
          >
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}