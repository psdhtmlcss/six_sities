import { Link } from 'react-router-dom';
import { AppRoute } from 'const';
import { useAppDispatch } from 'hooks';
import { changeCity } from 'store/action';

type LocationItemProps = {
  city: string;
  onChangeCity: (city: string) => void;
  currentCity: string;
}

function LocationItem({ city, onChangeCity, currentCity }: LocationItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(changeCity(city));
    onChangeCity(city);
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
