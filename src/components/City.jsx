import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
import { useEffect } from "react";
import formatDate from "../constants/formatDate";
import Spinner from "./Spinner";

const City = () => {
  const { id } = useParams();

  const { getCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id]);

  const { cityName, date, emoji, notes } = currentCity;

  const navigate = useNavigate();

  return (
    <div className="bg-emerald-950 text-emerald-100 w-4/5 mx-auto py-8 px-12 rounded-md  border-2 hover:border-orange-400 flex justify-center items-center hover:bg-emerald-900 cursor-pointer transition-all duration-300">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-8 items-center">
            {" "}
            <h4 className="font-medium text-sm underline underline-offset-2">
              CITYNAME
            </h4>
            <h1 className="text-2xl text-amber-400">
              <span>{emoji}</span> {cityName}
            </h1>
          </div>
          <div className="flex justify-between gap-8 items-center">
            {" "}
            <h4 className="font-medium text-sm underline underline-offset-2">
              YOU WENT TO {cityName} ON
            </h4>
            <date className="text-xl">{date && formatDate(date)}</date>
          </div>
          <div className="flex justify-between gap-8 items-center">
            {" "}
            <h4 className="font-medium text-sm underline underline-offset-2">
              YOUR NOTES
            </h4>
            <date className="text-emerald-200">{notes}</date>
          </div>
          <div className="flex justify-between gap-8 items-center">
            {" "}
            <h4 className="font-medium text-sm underline underline-offset-2">
              LEARN MORE
            </h4>
            <a
              className="text-md text-orange-500 hover:text-orange-200"
              href={`https://en.wikipedia.org/wiki/${cityName}`}
              target="_blank"
            >{`Check out ${cityName} on Wikipedia →`}</a>
          </div>
          <div>
            <button
              className="border-2 py-1 px-3 bg-lime-950 hover:border-lime-800 cursor-pointer transition-all duration-300 hover:bg-transparent"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              &larr; Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default City;
