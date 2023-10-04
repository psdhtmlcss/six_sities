import { Offers } from 'types';
import { OfferCard } from 'components';
import { usePageId, useAppSelector } from 'hooks';

type OffersListScreenProps = {
  offers: Offers;
  onListMouseOver?: (offer: number | null) => void;
}

function OffersList({offers, onListMouseOver}: OffersListScreenProps): JSX.Element {
  const pageId = usePageId();
  const currentSort = useAppSelector((state) => state.sort);
  // eslint-disable-next-line no-console
  console.log(currentSort);
  const listClass = pageId ? 'near-places__list' : 'cities__places-list tabs__content';
  return (
    <div className={`places__list ${listClass}`}>
      {
        offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} onListMouseOver={onListMouseOver} />
        ))
      }
    </div>
  );
}

export { OffersList };
