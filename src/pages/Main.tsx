import { OffersList, Map } from 'components';
import { cities } from 'mock/cities';
import { useState } from 'react';
import { Offer } from 'types';
import { LocationsList } from 'components';
import { store } from 'store';


function Main(): JSX.Element {
  const { offers } = store.getState();
  const offerCount = offers.length;
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const [currentCity, setCurrentCity] = useState<string>(cities[0]);

  const onListMouseOver = (offerId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === offerId) as Offer;
    setSelectedOffer(currentOffer);
  };

  const onChangeCity = (city: string) => {
    setCurrentCity(city);
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
            <b className='places__found'>{`${offerCount} places to stay in Amsterdam`}</b>
            <form className='places__sorting' action='#' method='get'>
              <span className='places__sorting-caption'>Sort by</span>
              <span className='places__sorting-type' tabIndex={0}>
                Popular
                <svg className='places__sorting-arrow' width={7} height={4}>
                  <use xlinkHref='#icon-arrow-select' />
                </svg>
              </span>
              <ul className='places__options places__options--custom places__options--opened'>
                <li
                  className='places__option places__option--active'
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className='places__option' tabIndex={0}>
                  Price: low to high
                </li>
                <li className='places__option' tabIndex={0}>
                  Price: high to low
                </li>
                <li className='places__option' tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <OffersList offers={offers} onListMouseOver={onListMouseOver} />
          </section>
          <div className='cities__right-section'>
            <Map offers={offers} selectedOffer={selectedOffer} />
          </div>
        </div>
      </div>
    </>
  );
}

export { Main };
