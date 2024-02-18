import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex items-center justify-center bg-blue-800 text-blue-100 w-full  bg-[url('../../public/bg.jpg')] bg-cover bg-no-repeat bg-center h-full z-10">
      <div className="w-full h-screen absolute bg-gradient-to-br from-stone-900 to-emerald-950 opacity-70 top-0 left-0 -z-0">
        {" "}
      </div>
      <section className="max-w-6xl  text-center px-4 pt-32 z-10">
        <h1 className="text-5xl mb-8">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2 className="text-xl w-[80%] mx-auto opacity-60 mb-16">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link
          to="/login"
          className="transition-all duration-500 px-4 py-2 border-2 border-transparent  bg-amber-400 text-slate-900 font-medium hover:bg-transparent hover:border-amber-400 hover:text-amber-400 text-xl"
        >
          Start tracking now
        </Link>
      </section>
    </main>
  );
};

export default Home;
