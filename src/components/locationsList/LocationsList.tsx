import { LocationItem } from 'components';

type LocationListProps = {
  cities: string[];
  onChangeCity: (city: string) => void;
  currentCity: string;
}

function LocationsList({ cities, onChangeCity, currentCity }: LocationListProps): JSX.Element {
  return (
    <ul className='locations__list tabs__list'>
      {
        cities.map((city) => (
          <LocationItem key={city} city={city} onChangeCity={onChangeCity} currentCity={currentCity} />
        ))
      }
    </ul>
  );
}

export { LocationsList };
