import { useAppSelector } from "../redux/hooks"
import Map from 'react-map-gl';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from "react";
 
mapboxgl.accessToken = 'pk.eyJ1IjoibXJib2dkYW4wMTAxIiwiYSI6ImNsY3B0b2w3ZTJhN3UzcG10OWhvajlkdGEifQ.XMVy3JmEQhjeMer99ybuNg';
const Places = () => {
   const places = useAppSelector(state=>state.mapReducer)
   console.log(places);
   const mapContainer = useRef<any>(null);
const map = useRef<any>(null);
const [lng, setLng] = useState(24.945831);
const [lat, setLat] = useState(60.1699);
const [zoom, setZoom] = useState(12);
useEffect(() => {
  if (map.current) return; // initialize map only once
  
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [lng, lat],
  zoom: zoom
  });
  });
  return (
    <>
   {<div>
<div ref={mapContainer} className="map-container" />
</div>}
   
    </>
  )
}

export default Places