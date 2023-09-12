import { Offers } from 'types';
import { OfferCard } from 'components';

type OffersListScreenProps = {
  offers: Offers;
  onListMouseOver: (offer: number | null) => void;
}

function OffersList({offers, onListMouseOver}: OffersListScreenProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} onMouseOver={onListMouseOver} />
        ))
      }
    </div>
  );
}

export { OffersList };
