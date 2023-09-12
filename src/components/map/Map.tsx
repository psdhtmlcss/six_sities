import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { useMap } from 'hooks';
import { Offer } from 'types';

type MapScreenProps = {
  selectedOffer: Offer | undefined;
}

function Map({selectedOffer}: MapScreenProps): JSX.Element {
  const city = selectedOffer?.city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  return (
    <section ref={mapRef} className='cities__map map' style={{height: '500px'}} />
  );
}

export { Map };
