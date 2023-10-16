import { OfferCard } from 'components';
import { usePageId, useAppSelector } from 'hooks';
import { getOffers } from 'store/offers/selectors';

function OffersList(): JSX.Element {
  const pageId = usePageId();
  const offers = useAppSelector(getOffers);
  const listClass = pageId ? 'near-places__list' : 'cities__places-list tabs__content';
  return (
    <div className={`places__list ${listClass}`}>
      {
        offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))
      }
    </div>
  );
}

export { OffersList };
