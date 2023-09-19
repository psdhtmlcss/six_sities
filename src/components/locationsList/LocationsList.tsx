import { LocationItem } from 'components';

type LocationListProps = {
  cities: string[];
}

function LocationsList({ cities }: LocationListProps): JSX.Element {
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
