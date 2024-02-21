import { Link } from "react-router-dom";
import formatDate from "../constants/formatDate";
import { useCities } from "../context/CitiesContext";

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;

  const queryString = `${id}?lat=${position.lat}&lng=${position.lng}`;

  const { currentCity } = useCities();
  return (
    <div>
      <Link
        className={`bg-slate-800 flex py-2 border-2 border-transparent px-4 rounded-md gap-8 ${
          currentCity.id === city.id && "border-green-600"
        }`}
        to={`${queryString}`}
      >
        <div className="flex items-center gap-4">
          <span className="text-sm">{emoji}</span>
          <h3 className="text-yellow-400 text-lg">{cityName}</h3>
        </div>
        <div className="flex items-center gap-4">
          <time className="text-sm">{formatDate(date)}</time>
          <button className=" hover:bg-red-800 p-4 rounded-full w-6 h-6 flex items-center justify-center">
            ✕
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CityItem;
