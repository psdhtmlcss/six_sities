import { useEffect, useRef, useState, MutableRefObject } from 'react';
import leaflet, {Map} from 'leaflet';
import { City } from 'types';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City | undefined): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    // console.log(isRenderedRef.current);
    if (mapRef.current !== null && !isRenderedRef.current && city) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city?.location.latitude,
          lng: city?.location.longitude
        },
        zoom: city?.location.zoom
      });

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export { useMap };
