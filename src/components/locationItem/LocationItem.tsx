type LocationItemProps = {
  city: string;
}

function LocationItem({ city }: LocationItemProps): JSX.Element {
  return (
    <li className='locations__item'>
      <button type='button' className='locations__item-link tabs__item'>
        <span>{city}</span>
      </button>
    </li>
  );
}

export { LocationItem };
