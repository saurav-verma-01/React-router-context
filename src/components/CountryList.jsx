import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

const CountryList = ({ isLoading, cities }) => {
  // console.log(cities);

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    else return arr;
  }, []);
  // console.log(countries);
  return (
    <div className="h-full p-4 flex gap-4 flex-wrap content-center items-center justify-center">
      {isLoading ? (
        <Spinner />
      ) : countries.length === 0 ? (
        <p className="text-2xl">
          👋👋 Select your First City by Clicking the City on the Map.
        </p>
      ) : (
        countries.map((item) => <CountryItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default CountryList;
