import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useURLPosition } from "../hooks/useURLposition";
import Spinner from "./Spinner";
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

const Form = () => {
  const [mapLat, mapLng] = useURLPosition();
  console.log(mapLat, mapLng);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");

  const navigate = useNavigate();

  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [geocodeingError, setGeocodeingError] = useState("");

  console.log(cityName, country, emoji);
  useEffect(() => {
    const fetchCityData = async () => {
      try {
        setIsLoadingGeoCoding(true);
        setGeocodeingError("");
        const res = await fetch(
          `${BASE_URL}?latitude=${mapLat}&longitude=${mapLng}`
        );
        const data = await res.json();
        console.log(data);
        if (!data.countryCode)
          throw new Error(
            "it doesn't seem to be a city. Click somewhere else 😉"
          );
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(data.countryCode);
      } catch (error) {
        setGeocodeingError(error.message);
      } finally {
        setIsLoadingGeoCoding(false);
      }
    };

    fetchCityData();
  }, [mapLat, mapLng]);

  if (isLoadingGeoCoding)
    return (
      <div className="bg-blue-900 rounded-lg py-8 px-4 text-center w-4/5 mx-auto text-2xl">
        <Spinner />
      </div>
    );

  if (geocodeingError)
    return (
      <p className="bg-blue-900 rounded-lg py-8 px-4 text-center w-4/5 mx-auto text-2xl">
        There is Some Geocoding Error {geocodeingError}
      </p>
    );

  return (
    <form className="bg-blue-900 rounded-lg p-4 w-4/5 mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          className="p-2 rounded text-slate-800 font-bold text-xl"
          placeholder="New York..."
        />
        <span className="absolute right-4 top-9 w-8 h-8 opacity-90 text-slate-800 text-2xl font-bold">
          {convertToEmoji(emoji)}
        </span>
      </div>

      <div className="flex flex-col gap-2 relative">
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          className="p-2 rounded text-slate-800 font-bold text-xl"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          className="p-2 rounded text-slate-800 font-bold text-xl"
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className="flex justify-between">
        <button className="border-2 py-1 px-3 bg-purple-800 hover:border-purple-800 cursor-pointer transition-all duration-300 hover:bg-transparent">
          Add
        </button>
        <button
          className="border-2 py-1 px-3 bg-purple-800 hover:border-purple-800 cursor-pointer transition-all duration-300 hover:bg-transparent"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </button>
      </div>
    </form>
  );
};

export default Form;
