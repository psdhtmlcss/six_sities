import { Offer } from 'types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { usePageId } from 'hooks';

type OfferScreenProps = {
  offer: Offer;
  onListMouseOver?: (offer: number | null) => void;
}

function OfferCard({offer, onListMouseOver}: OfferScreenProps): JSX.Element {
  const pageId = usePageId();
  const { id, previewImage, title, price, type, rating } = offer;
  const [hover, setHover] = useState<number | null>(null);
  const handleMouseOver = () => {
    setHover(id);
    if (onListMouseOver) {
      onListMouseOver(hover);
    }
  };
  const handleMouseOut = () => {
    setHover(null);
  };
  const articleClass = pageId ? 'near-places__card' : 'cities__card';
  const wrapperClass = pageId ? 'near-places__image-wrapper' : 'cities__image-wrapper';
  return (
    <article className={`place-card ${articleClass}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className={`place-card__image-wrapper ${wrapperClass}`}>
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
