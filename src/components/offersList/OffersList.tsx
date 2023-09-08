import { Offers } from 'types';
import { OfferCard } from 'components';

type OffersListScreenProps = {
  offers: Offers;
}

function OffersList({offers}: OffersListScreenProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))
      }
    </div>
  );
}

export { OffersList };
