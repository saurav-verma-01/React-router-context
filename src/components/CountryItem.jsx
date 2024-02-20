const CountryItem = ({ item }) => {
  // console.log(country);
  const { emoji, country } = item;
  return (
    <div className="px-4 py-2 flex items-center justify-center flex-col bg-slate-900 rounded-md border-2 border-transparent hover:border-slate-900 hover:bg-transparent cursor-pointer transition-all duration-300">
      <span>{emoji}</span>
      <p className="text-orange-400 font-medium">{country}</p>
    </div>
  );
};

export default CountryItem;
