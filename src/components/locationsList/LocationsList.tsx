import { LocationItem } from 'components';
import { cities } from 'const';

function LocationsList(): JSX.Element {
  return (
    <ul className='locations__list tabs__list'>
      {
        cities.map((city) => (
          <LocationItem key={city} city={city} />
        ))
      }
    </ul>
  );
}

export { LocationsList };
