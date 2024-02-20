import { useParams, useSearchParams } from "react-router-dom";

const City = () => {
  const param = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className="bg-purple-800 h-full flex items-center justify-center flex-col gap-2">
      <h1>City Name : {param.id}</h1>
      <h2>
        Position - {lat}, {lng}
      </h2>
    </div>
  );
};

export default City;
