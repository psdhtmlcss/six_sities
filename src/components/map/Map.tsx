import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMap } from 'hooks';
import { Offer, Offers } from 'types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from 'const';

type MapScreenProps = {
  selectedOffer?: Offer | undefined;
  offers: Offers;
}

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
  console.log('im render');
  const city = offers[0].city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const { id } = useParams();

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          selectedOffer !== undefined && selectedOffer.id === offer.id ? currentCustomIcon : defaultCustomIcon
        ).addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);
  return (
    id ? <section ref={mapRef} className='property__map map' style={{height: '579px', width: '1144px', margin: '0 auto 50px'}}/> : <section ref={mapRef} className='cities__map map' style={{height: '100%'}} />
  );
}

export { Map };
