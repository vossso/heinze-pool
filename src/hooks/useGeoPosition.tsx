import axios from "axios";
import { useEffect, useState } from "react";

const useGeoPosition = (key, address) => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getCoords = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`
      );

      const result = res.data.results[0].geometry.location;
      if (result.lat !== null && result.lng !== null) {
        setPosition({ lat: result.lat, lng: result.lng });
      } else {
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getCoords();
  }, [address]);

  return [position, loading, error];
};

export default useGeoPosition;
