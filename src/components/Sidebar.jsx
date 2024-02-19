import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full bg-purple-900 text-purple-100 basis-[44rem] shrink-0 pt-28 flex flex-col gap-8">
      <div className="bg-slate-950  rounded-lg p-2 w-64 flex items-center justify-between mx-auto mt-8">
        <NavLink
          to="/app/cities"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2   ${
              isActive
                ? "bg-slate-700 font-medium"
                : "bg-transparent font-normal"
            }`
          }
        >
          Cities
        </NavLink>
        <NavLink
          to="/app/countries"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 ${
              isActive
                ? "bg-slate-700 font-medium"
                : "bg-transparent font-normal"
            }`
          }
        >
          Countries
        </NavLink>
      </div>
      <Outlet />

      <footer className="w-full bg-slate-950 p-4 py-8 mt-auto">
        <h2 className="text-center uppercase text-2xl font-medium mb-4">
          Worldwise
        </h2>
        <p className="text-sm text-center">
          Copyright &copy; Saurav Kumar Verma. React Worldwise App created while
          learning React router DOM and React Context API. 2027
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
