import { Link } from 'react-router-dom';
import { AppRoute } from 'const';
import { useAppDispatch } from 'hooks';
import { offersParis } from 'mock/offers';
import { changeCity } from 'store/action';

type LocationItemProps = {
  city: string;
}

function LocationItem({ city }: LocationItemProps): JSX.Element {
  // const cityy = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(changeCity({ city: city, offers: offersParis }));
  };
  return (
    <li className='locations__item'>
      <Link
        to={AppRoute.Main}
        className='locations__item-link tabs__item'
        onClick={handleClick}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export { LocationItem };
