import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapboxMap = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhcmF0aG5ld2FnZWdsb2JhbCIsImEiOiJja2ZoN3A3ajUwOXk3MnVwOHQ1N3Z0YmJ2In0.dadI7LZ4521ocUTJ3Y4JtA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 20], // Adjusted center to focus on a specific area
        zoom: 1 // Adjusted zoom level for better visibility
      });

    // map.addControl(new mapboxgl.NavigationControl());

    // Adjusted bounds to focus on the entire world
    const bounds = [
      [-90, -20], // Southwest coordinates (bottom-left)
      [0, 50] // Northeast coordinates (top-right)
    ];

    map.fitBounds(bounds, {
      padding: 20 // Adjust padding as needed
    });

    return () => {
      map.remove();
    };
  }, []);

  return( 

  <div id="map" style={{ width: '100%', height: '290px' }} className='mb-5 mt-2' />
  
)};

export default MapboxMap;
