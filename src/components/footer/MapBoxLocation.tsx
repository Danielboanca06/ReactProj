import React, { useEffect } from "react";
import mapboxgl from 'mapbox-gl';

export function MapBoxLocation() {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsYm9hbmNhIiwiYSI6ImNsaTFuNXExbDF6YnkzbG13c3c5aWkzd3AifQ.OLyGRDKQrADw7QujEJ-4mQ';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-6.2603, 53.3498], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    map.on('load', () => {
      map.addLayer({
        id: 'rpd_parks',
        type: 'fill',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.3o7ubwm8'
        },
        'source-layer': 'RPD_Parks',
        layout: {
          visibility: 'visible'
        },
        paint: {
          'fill-color': 'rgba(61,153,80,0.55)'
        }
      });
    });

    // Clean up the map instance on component unmount
    return () => map.remove();
  }, []);

  return (
    <label htmlFor="Map">
    <div className="flex flex-col justify-center items-center text-white text-center">
  <div className="flex justify-center p-10  sm:p-10">
    <div id="map" className="w-full min-w-fit " style={{ height: '400px' }}></div>
  </div>
</div>
</label>
  )
}
