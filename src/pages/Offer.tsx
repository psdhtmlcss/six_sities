import { Offers, Offer as OfferType } from 'types';
import { useParams } from 'react-router-dom';
import { ReviewsForm } from 'components';

type OffersScreenProps = {
  offers: Offers;
}

function Offer({offers}: OffersScreenProps): JSX.Element {
  const { id } = useParams();
  const currentOffer = offers.find((offer) => offer.id === Number(id)) as OfferType;
  const { images, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, description } = currentOffer;
  return (
    <>
      <section className='property'>
        <div className='property__gallery-container container'>
          <div className='property__gallery'>
            {
              images.map((image) => (
                <div className='property__image-wrapper' key={id}>
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
                Reviews · <span className='reviews__amount'>1</span>
              </h2>
              <ul className='reviews__list'>
                <li className='reviews__item'>
                  <div className='reviews__user user'>
                    <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                      <img
                        className='reviews__avatar user__avatar'
                        src='img/avatar-max.jpg'
                        width={54}
                        height={54}
                        alt='Reviews avatar'
                      />
                    </div>
                    <span className='reviews__user-name'>Max</span>
                  </div>
                  <div className='reviews__info'>
                    <div className='reviews__rating rating'>
                      <div className='reviews__stars rating__stars'>
                        <span style={{ width: '80%' }} />
                        <span className='visually-hidden'>Rating</span>
                      </div>
                    </div>
                    <p className='reviews__text'>
                      A quiet cozy and picturesque that hides behind a a river by
                      the unique lightness of Amsterdam. The building is green and
                      from 18th century.
                    </p>
                    <time className='reviews__time' dateTime='2019-04-24'>
                      April 2019
                    </time>
                  </div>
                </li>
              </ul>
              <ReviewsForm />
            </section>
          </div>
        </div>
        <section className='property__map map' />
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          <div className='near-places__list places__list'>
            <article className='near-places__card place-card'>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='#'>
                  <img
                    className='place-card__image'
                    src='img/room.jpg'
                    width={260}
                    height={200}
                    alt='Place image'
                  />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>€80</b>
                    <span className='place-card__price-text'>/&nbsp;night</span>
                  </div>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: '80%' }} />
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='#'>Wood and stone place</a>
                </h2>
                <p className='place-card__type'>Private room</p>
              </div>
            </article>
            <article className='near-places__card place-card'>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='#'>
                  <img
                    className='place-card__image'
                    src='img/apartment-02.jpg'
                    width={260}
                    height={200}
                    alt='Place image'
                  />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>€132</b>
                    <span className='place-card__price-text'>/&nbsp;night</span>
                  </div>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: '80%' }} />
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='#'>Canal View Prinsengracht</a>
                </h2>
                <p className='place-card__type'>Apartment</p>
              </div>
            </article>
            <article className='near-places__card place-card'>
              <div className='place-card__mark'>
                <span>Premium</span>
              </div>
              <div className='near-places__image-wrapper place-card__image-wrapper'>
                <a href='#'>
                  <img
                    className='place-card__image'
                    src='img/apartment-03.jpg'
                    width={260}
                    height={200}
                    alt='Place image'
                  />
                </a>
              </div>
              <div className='place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>€180</b>
                    <span className='place-card__price-text'>/&nbsp;night</span>
                  </div>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: '100%' }} />
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <a href='#'>Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className='place-card__type'>Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export { Offer };
