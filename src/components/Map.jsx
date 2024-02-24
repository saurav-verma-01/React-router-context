import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
import { useGeolocation } from "../hooks/useGeoLocation";
import { useURLPosition } from "../hooks/useURLposition";

const Map = () => {
  const { cities } = useCities();
  const [mapPos, setMapPos] = useState([27.5, 77.5]);

  const {
    isLoading: isLoadingGeoLocation,
    position: geolocationPostion,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useURLPosition();
  // console.log(geolocationPostion);

  useEffect(() => {
    if (mapLat && mapLng) setMapPos([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPostion)
      setMapPos([geolocationPostion.lat, geolocationPostion.lng]);
  }, [geolocationPostion]);

  return (
    <>
      {geolocationPostion?.lat !== mapPos[0] && (
        <button
          onClick={getPosition}
          className="absolute bg-green-600 text-gray-50 p-2 rounded h-max w-max bottom-16 left-[75%] translate-x-[-50%] z-30 hover:bg-green-400 cursor-pointer "
        >
          {isLoadingGeoLocation ? "Loading..." : "Use your Location"}
        </button>
      )}
      <div className="h-full bg-orange-500 basis-full shrink relative z-20">
        <MapContainer
          className="h-full"
          center={mapPos}
          zoom={6}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <span>{city.emoji}</span> &nbsp; <span>{city.cityName}</span>
              </Popup>
            </Marker>
          ))}

          <ChangeCenter position={mapPos} />
          <DetectClick />
        </MapContainer>
      </div>
    </>
  );
};

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const DetectClick = () => {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
};

export default Map;
