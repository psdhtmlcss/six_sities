import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { useMap } from 'hooks';
import { Offer, Offers } from 'types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from 'const';

type MapScreenProps = {
  selectedOffer: Offer | undefined;
  offers: Offers;
}

const a = {
  name: 'Amsterdam',
  location: {
    latitude: 52.374,
    longitude: 4.88969,
    zoom: 13
  },
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({selectedOffer, offers}: MapScreenProps): JSX.Element {
  // const city = selectedOffer?.city;
  const city = a;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  // console.log('map', map);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        // console.log('place', offer.city.location.latitude, offer.city.location.longitude);
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude
        });

        marker.setIcon(
          selectedOffer !== undefined && selectedOffer.id === offer.id ? currentCustomIcon : defaultCustomIcon
        ).addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);
  return (
    <section ref={mapRef} className='cities__map map' style={{height: '100%'}} />
  );
}

export { Map };
