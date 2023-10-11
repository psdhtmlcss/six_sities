import { Link } from 'react-router-dom';
import { AppRoute } from 'const';
import { Offer } from 'types';
import { useAppDispatch, useAppSelector } from 'hooks';
import { changeCity, setCityOffers } from 'store/action';

type LocationItemProps = {
  city: string;
}

function LocationItem({ city }: LocationItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city.name);
  const handleClick = () => {
    const newCity = offers.find((offer) => offer.city.name === city) as Offer;
    dispatch(changeCity(newCity.city));
    dispatch(setCityOffers());
  };
  const activeClass = city === currentCity ? 'tabs__item--active' : '';
  return (
    <li className='locations__item'>
      <Link
        to={AppRoute.Main}
        className={`locations__item-link tabs__item ${activeClass}`}
        onClick={handleClick}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export { LocationItem };
