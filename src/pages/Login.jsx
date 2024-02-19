import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  return (
    <main className="flex items-center justify-center bg-fuchsia-950 text-fuchsia-100 w-full min-h-screen">
      <div className="bg-purple-900 p-8 rounded-lg">
        <form className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <label htmlFor="email" className="text-xl">
              Email address
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="text-fuchsia-950 text-lg font-medium p-2 rounded outline-none border-none"
            />
          </div>

          <div className="flex gap-4 items-center justify-between">
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="text-fuchsia-950 text-lg font-medium p-2 rounded outline-none border-none"
            />
          </div>

          <div className="flex">
            <Link
              to="/app"
              className="transition-all duration-500 text-fuchsia-950 bg-white text-lg font-medium py-2 px-4 rounded outline-none  w-full  border-2  border-fuchsia-950 hover:text-white hover:border-white hover:bg-fuchsia-950 text-center"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
