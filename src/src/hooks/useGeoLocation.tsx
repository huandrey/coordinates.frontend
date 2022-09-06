import React from "react";

export const useGeoLocation = () => {
  const [location, setLocation] = React.useState({
    loaded: false,
    coordinates: {
      lat: "",
      lng: ""
    }
  });

  function onSuccess(location: any) {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }
    });
  }

  function onError(error: any) {
    setLocation({
      loaded: true,
      ...error
    });
  }

  React.useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported"
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};
