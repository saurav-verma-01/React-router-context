import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useURLPosition } from "../hooks/useURLposition";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const Form = () => {
  const [mapLat, mapLng] = useURLPosition();
  console.log(mapLat, mapLng);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  return (
    <form className="bg-blue-900 rounded-lg p-4 w-4/5 mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className="flex flex-col gap-2 relative">
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
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
