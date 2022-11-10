import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FuYXNoaWktYnIiLCJhIjoiY2t1enNjZjJnMnZqYzJ1bzZ5MG1mZDRxNiJ9.jbo-wGdrVxfkVv_lDGn5LA';
import { promiseGetLngLat } from '../../assets/js/realtime-db'

export default function SenderMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);    
    const [zoom, setZoom] = useState(9);
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        promiseGetLngLat.then((data) => {
            console.log("dados: "+ data);
            setLng(data[0]);
            setLat(data[1]);
            map.current.setCenter(data);
        });
        // console.log(getLatitude())
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom,
          projection: 'globe'
        });
        
    });
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
        
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('style.load', () => {
            console.log(map.current);
            map.current.addControl(
                new mapboxgl.GeolocateControl({
                    positionOptions: {
                    enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true
                })
            );
        })
    });
    

    return (
        <div> 
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>           
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}