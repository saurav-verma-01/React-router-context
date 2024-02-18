import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-slate-900  text-slate-100 flex items-center justify-between py-4 px-8 border-b-2 border-amber-300">
      <h1 className="text-3xl uppercase font-bold">
        <Link to="/">Worldwise</Link>
      </h1>

      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/product"
              className="transition-all duration-300 hover:text-amber-300"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className=" transition-all duration-300   hover:text-amber-300  "
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
