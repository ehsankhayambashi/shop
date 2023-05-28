import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: 35.699284,
    longitude: 51.337662,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return location;
};

export default useGeolocation;
