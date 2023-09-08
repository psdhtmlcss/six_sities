import { Offer } from 'types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type OfferScreenProps = {
  offer: Offer;
}

function OfferCard({offer}: OfferScreenProps): JSX.Element {
  const { id, previewImage, title, price, type, rating } = offer;
  const [hover, setHover] = useState<number | null>(null);
  console.log(hover);
  const handleMouseOver = () => {
    setHover(id);
  };
  const handleMouseOut = () => {
    setHover(null);
  };
  return (
    <article className='cities__card place-card' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${id}`}>
          <img
            className='place-card__image'
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>€{price}</b>
            <span className='place-card__price-text'>/&nbsp;night</span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${rating * 100 / 5}%` }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}

export { OfferCard };
