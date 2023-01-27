import { useAppSelector } from "../redux/hooks";
import Map from "react-map-gl";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from "react";
import background from "../img/marker.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXJib2dkYW4wMTAxIiwiYSI6ImNsY3B0b2w3ZTJhN3UzcG10OWhvajlkdGEifQ.XMVy3JmEQhjeMer99ybuNg";
const Places = () => {
  const places = useAppSelector((state) => state.mapReducer);
  console.log(places);
  const longlat = places.map(place => place.location.lon);
  console.log(longlat);
  
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(24.945831);
  const [lat, setLat] = useState(60.1699);
  const [zoom, setZoom] = useState(12);
  
useEffect(() => {
  if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
},[])



  useEffect(() => {
    places.forEach((place) => {
      const popup = new mapboxgl.Popup({ offset:30})
      .setLngLat([place.location.lon, place.location.lat])
      .setHTML('<h4>'+ place.name.en+ '</h4>')
      .addTo(map.current);
      console.log(place.location.lon + "lon");
      console.log(place.location.lat + "lat");
      const marker = new mapboxgl.Marker()
    .setLngLat([place.location.lon, place.location.lat])
    .setPopup(popup)
    .addTo(map.current);
 
    })
   
  },[places]);

  

  return (
    <>
          <div>
          <div ref={mapContainer} className="map-container" />
        </div>
      <div className="names">
      
      </div>
      {/* {places.map((place) => (

        <div className="places" key={place.id}>
          <div className="places-block">
            <div className="places-block__name">
              {place.name.en}
            </div>
          </div>

        </div>
      ))} */}
    </>
  );
};

export default Places;
