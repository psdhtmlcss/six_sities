import { Offers, Offer as OfferType } from 'types';
import { useParams } from 'react-router-dom';
import { ReviewsForm } from 'components';
import { Reviews as ReviewsType } from 'types';
import { reviews as reviewsJson } from 'mock/reviews';
import { Reviews, Map, OffersList } from 'components';
import { useAuth } from 'hooks';

type OffersScreenProps = {
  offers: Offers;
}

function Offer({offers}: OffersScreenProps): JSX.Element {
  const user = useAuth();
  const { id } = useParams();
  const currentOffer = offers.find((offer) => offer.id === Number(id)) as OfferType;
  const reviews: ReviewsType = reviewsJson;
  const { images, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, description } = currentOffer;
  return (
    <>
      <section className='property'>
        <div className='property__gallery-container container'>
          <div className='property__gallery'>
            {
              images.map((image) => (
                <div className='property__image-wrapper' key={image}>
                  <img
                    className='property__image'
                    src={image}
                    alt={title}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className='property__container container'>
          <div className='property__wrapper'>
            {
              isPremium && (
                <div className='property__mark'>
                  <span>Premium</span>
                </div>
              )
            }
            <div className='property__name-wrapper'>
              <h1 className='property__name'>
                {title}
              </h1>
            </div>
            <div className='property__rating rating'>
              <div className='property__stars rating__stars'>
                <span style={{ width: `${rating * 100 / 5}%` }} />
                <span className='visually-hidden'>Rating</span>
              </div>
              <span className='property__rating-value rating__value'>{rating}</span>
            </div>
            <ul className='property__features'>
              <li className='property__feature property__feature--entire'>
                {type}
              </li>
              <li className='property__feature property__feature--bedrooms'>
                {bedrooms} Bedrooms
              </li>
              <li className='property__feature property__feature--adults'>
                Max {maxAdults} adults
              </li>
            </ul>
            <div className='property__price'>
              <b className='property__price-value'>€{price}</b>
              <span className='property__price-text'>&nbsp;night</span>
            </div>
            <div className='property__inside'>
              <h2 className='property__inside-title'>What&apos;s inside</h2>
              <ul className='property__inside-list'>
                {
                  goods.map((good) => (
                    <li key={good} className='property__inside-item'>{good}</li>
                  ))
                }
              </ul>
            </div>
            <div className='property__host'>
              <h2 className='property__host-title'>Meet the host</h2>
              <div className='property__host-user user'>
                <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                  <img
                    className='property__avatar user__avatar'
                    src={host.avatarUrl}
                    width={74}
                    height={74}
                    alt={host.name}
                  />
                </div>
                <span className='property__user-name'>{host.name}</span>
                {
                  host.isPro && <span className='property__user-status'>Pro</span>
                }
              </div>
              <div className='property__description'>
                {description}
              </div>
            </div>
            <section className='property__reviews reviews'>
              <h2 className='reviews__title'>
                Reviews · <span className='reviews__amount'>{reviews.length}</span>
              </h2>
              {reviews.length && <Reviews reviews={reviews} />}
              { user && <ReviewsForm /> }
            </section>
          </div>
        </div>
        <Map offers={offers} />
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          <OffersList offers={offers} />
        </section>
      </div>
    </>
  );
}

export { Offer };
