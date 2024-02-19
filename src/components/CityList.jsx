import CityItem from "./CityItem";

const CityList = ({ cities, isLoading }) => {
  return (
    <div className="h-full p-4 flex gap-4 flex-wrap items-center justify-center">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
};

export default CityList;
