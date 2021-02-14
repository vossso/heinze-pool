import "./GoogleMap.scss";

import React, { useEffect } from "react";
import { useGoogleMaps } from "react-hook-google-maps";

import icon from "../../../img/icons/hexa.svg";
import useBreakpoint from "../../../hooks/useBreakpoint";
import useGeoPosition from "../../../hooks/useGeoPosition";
import Container from "../Container/Container";
import Link from "../Link/Link";

interface IGoogleMap {
  address: {
    location: string;
    street: string;
    plz: string;
  };
}

const GoogleMap: React.FC<IGoogleMap> = ({ address }) => {
  const { location, street, plz } = address;
  const position = street + " " + plz + " " + location;
  const [currentPos, isGeoLoading] = useGeoPosition(
    "AIzaSyAp0yOZhCdzrV4dRadUavZL6lNHRvmAbFY",
    position
  );

  console.log(currentPos);
  const isMaxVpS = useBreakpoint("s");

  const offset =
    typeof window !== "undefined" && window.innerWidth > 568
      ? 0.000006 * window.innerWidth
      : 0;

  const { lat, lng } = currentPos as { lat: number; lng: number };

  const { ref, map, google } = useGoogleMaps(
    "AIzaSyAp0yOZhCdzrV4dRadUavZL6lNHRvmAbFY",
    {
      center: {
        lat,
        lng: lng - offset,
      },
      zoom: 15,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      backgroundColor: "transparent",
      scrollwheel: false,
    }
  );

  useEffect(() => {
    //overwrite initial position (0,0) when useGeoPosition loading is complete.
    if (map) {
      map.setOptions({
        center: {
          lat,
          lng: lng - offset,
        },
        zoomControlOptions: {
          position: isMaxVpS
            ? google.maps.ControlPosition.RIGHT_TOP
            : google.maps.ControlPosition.RIGHT_BOTTOM,
        },
      });
    }
    console.log(ref);
  }, [currentPos, isMaxVpS]);

  google &&
    !isGeoLoading &&
    new google.maps.Marker({
      position: currentPos,
      title: position,
      map,
      icon: {
        url: icon,
        anchor: new google.maps.Point(22, 58),
      },
    });

  return (
    <div className="GoogleMap">
      <div className="GoogleMap__wrapper">
        <div className="GoogleMap__map" ref={ref} />
        {location && plz && street && (
          <div className="GoogleMap__link">
            <Link
              label="Anfahrt planen"
              link={{
                to: `https://www.google.de/maps/dir//${position}`,
                isExternalLink: true,
                target: "_blank",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleMap;
