import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="bg-slate-900  text-slate-100 flex items-center justify-between px-8 text-xl border-b-2 border-amber-300 h-[15%] z-20 absolute w-full">
      <Logo />

      <nav>
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `transition-all duration-700 hover:text-amber-300 px-2 py-1 border-b-2  ${
                  isActive ? "border-amber-300" : "border-transparent "
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `transition-all duration-700 hover:text-amber-300 px-2 py-1 border-b-2  ${
                  isActive ? "border-amber-300" : "border-transparent "
                }`
              }
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `transition-all duration-500 px-4 py-1 font-medium hover:bg-transparent hover:border-amber-400 hover:text-amber-400 ${
                  isActive
                    ? "text-amber-400 bg-transparent border-2 border-amber-400"
                    : "text-slate-900 bg-amber-400 border-2 border-transparent"
                }`
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
