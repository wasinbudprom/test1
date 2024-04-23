import React, { useEffect, useRef } from 'react';
import './Map.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAxbup5GVpp-iEJMbHYpeARG5DZYhU9A_s`;
    script.async = true;
    script.onload = () => {
      // Create the map
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 14.019304872603332, lng: 100.61581894719112 }, // Set the initial center of the map
        zoom: 13, // Set the initial zoom level
      });

      // Add a marker at the location of Mahidol University
      const marker1 = new window.google.maps.Marker({
        position: { lat: 13.989035460603345, lng: 100.61748188880743 },
        map: map,
        title: 'ฟิวเจอร์พาร์ครังสิต',
      });

      const marker2 = new window.google.maps.Marker({
        position: { lat: 14.039825512280657, lng: 100.61553216275436 },
        map: map,
        title: 'Bangkok University',
      });
    };
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '550px' }} />;
};

export default Map;