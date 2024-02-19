import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  return (
    <div className="w-full h-full bg-lime-700 text-lime-100 flex items-center ">
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
