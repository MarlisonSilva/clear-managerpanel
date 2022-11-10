import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FuYXNoaWktYnIiLCJhIjoiY2t1enNjZjJnMnZqYzJ1bzZ5MG1mZDRxNiJ9.jbo-wGdrVxfkVv_lDGn5LA';
import { promiseGetLngLat } from '../../assets/js/realtime-db'

export default function ReceiverMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);    
    const [zoom, setZoom] = useState(9);
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        // getLatitude().then(setLat());
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

    // TIMER QUE USA A "promiseGetLngLat" A CADA 10s
    useEffect(() => {
        const interval = setInterval(() => {
            promiseGetLngLat.then((data) => {
                console.log("dados: "+ data);
                setLng(data[0]);
                setLat(data[1]);
                map.current.setCenter(data);
            });
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div> 
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>           
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}