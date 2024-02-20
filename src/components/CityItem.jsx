import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;

  const queryString = `${id}?lat=${position.lat}&lng=${position.lng}`;
  return (
    <div>
      <Link
        className="bg-slate-800 flex py-2 px-4 rounded-md gap-8"
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
