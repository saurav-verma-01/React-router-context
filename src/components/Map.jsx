import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate();

  return (
    <div
      className="h-full bg-orange-500 basis-full shrink pt-28"
      onClick={() => navigate("form")}
    >
      <h1>MAP </h1>
      <h2 className="text-2xl">
        Position: {lat}, {lng}
      </h2>
      <button
        className="border-2 py-1 px-2 rounded mt-2"
        onClick={() => {
          setSearchParams({ lat: 24, lng: 48 });
        }}
      >
        Change Position
      </button>
    </div>
  );
};

export default Map;
