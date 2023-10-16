import { OffersList, Map, LocationsList, Sort } from 'components';
import { useAppSelector } from 'hooks';
import { getCurrentCity, getOffersPlace } from 'store/offers/selectors';


function Main(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const offersPlace = useAppSelector(getOffersPlace);

  const offerCount = offersPlace.length;

  return (
    <>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <LocationsList />
        </section>
      </div>
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>{`${offerCount} places to stay in ${currentCity.name}`}</b>
            <Sort />
            <OffersList />
          </section>
          <div className='cities__right-section'>
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}

export { Main };
