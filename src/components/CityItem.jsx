const CityItem = ({ city }) => {
  const { cityName, emoji, date } = city;
  console.log(cityName, emoji, date);
  return (
    <div className="bg-slate-800 flex py-2 px-4 rounded-md">
      <div>
        <span>{emoji}</span>
        <h3>{cityName}</h3>
      </div>
      <div>{date}</div>
    </div>
  );
};

export default CityItem;
