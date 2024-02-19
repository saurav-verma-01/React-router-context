import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

const CountryList = ({ isLoading, cities }) => {
  console.log(cities);

  const countries = [...new Set(cities.map((city) => {country: city.country, emoji: city.emoji, id: city.id}))];
  console.log(countries);
  return (
    <div className="h-full p-4 flex gap-4 flex-wrap content-center items-center justify-center">
      {isLoading ? (
        <Spinner />
      ) : countries.length === 0 ? (
        <p className="text-2xl">
          👋👋 Select your First City by Clicking the City on the Map.
        </p>
      ) : (
        countries.map((country) => (
          <CountryItem key={country} country={country} />
        ))
      )}
    </div>
  );
};

export default CountryList;
