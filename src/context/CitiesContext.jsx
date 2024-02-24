import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000/";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  const getCity = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert(`Some Problem occured while fetching Current City Data - ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const createCity = async (newCity) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch (error) {
      alert(`Some Problem occured while fetching Current City Data - ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCities = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}cities`);
      const data = await res.json();
      setCities(data);
    } catch (error) {
      alert(`Some Problem occured while fetching Cities Data - ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        getCity,
        currentCity,
        createCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error(
      "useCities custom hook is used Outside the scope of CitiesProvider Component"
    );

  return context;
};

export { CitiesProvider, useCities };
