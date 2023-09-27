import { Link } from 'react-router-dom';
import { AppRoute } from 'const';
import { City } from 'types';

type LocationItemProps = {
  city: string;
  onChangeCity: (city: string) => void;
  currentCity: City;
}

function LocationItem({ city, onChangeCity, currentCity }: LocationItemProps): JSX.Element {
  const handleClick = () => {
    onChangeCity(city);
  };
  const activeClass = city === currentCity.name ? 'tabs__item--active' : '';
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
