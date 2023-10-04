import { OffersList, Map, LocationsList, Sort } from 'components';
import { cities } from 'const';
import { useState } from 'react';
import { Offer} from 'types';
import { store } from 'store';
import { useAppSelector, useAppDispatch } from 'hooks';
import { changeCity } from 'store/action';


function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const { offers } = store.getState();
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const currentCity = useAppSelector((state) => state.city);
  const offersPlace = offers.filter((offer) => offer.city.name === currentCity.name);
  const offerCount = offersPlace.length;

  const onListMouseOver = (offerId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === offerId) as Offer;
    setSelectedOffer(currentOffer);
  };

  const onChangeCity = (city: string) => {
    const newCity = offers.find((offer) => offer.city.name === city) as Offer;
    dispatch(changeCity(newCity.city));
  };
  return (
    <>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <LocationsList cities={cities} onChangeCity={onChangeCity} currentCity={currentCity} />
        </section>
      </div>
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>{`${offerCount} places to stay in ${currentCity.name}`}</b>
            <Sort />
            <OffersList offers={offersPlace} onListMouseOver={onListMouseOver} />
          </section>
          <div className='cities__right-section'>
            <Map offers={offersPlace} selectedOffer={selectedOffer} />
          </div>
        </div>
      </div>
    </>
  );
}

export { Main };
