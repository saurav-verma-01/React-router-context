import CityItem from "./CityItem";
import Spinner from "./Spinner";

const CityList = ({ cities, isLoading }) => {
  return (
    <div className="h-full p-4 flex gap-4 flex-wrap content-center items-center justify-center">
      {isLoading ? (
        <Spinner />
      ) : cities.length === 0 ? (
        <p className="text-2xl">
          👋👋 Select your First City by Clicking the City on the Map.
        </p>
      ) : (
        cities.map((city) => <CityItem city={city} key={city.id} />)
      )}
    </div>
  );
};

export default CityList;
