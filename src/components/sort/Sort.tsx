import { useState, SyntheticEvent } from 'react';
import { sortItems } from 'const';
import { useAppSelector, useAppDispatch } from 'hooks';
import { changeSort } from 'store/action';

function Sort(): JSX.Element {
  const currentSortItem = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();
  const [sortOpen, setSortOpen] = useState(false);
  const sortClass = sortOpen ? 'places__options--opened' : '';
  const handleSortClick = () => {
    setSortOpen((prev) => !prev);
  };
  const handleSortItemClick = (evt: SyntheticEvent<HTMLElement, MouseEvent>) => {
    const target = evt.target as HTMLElement;
    dispatch(changeSort(target.textContent as string));
    setSortOpen(false);
  };
  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0} onClick={handleSortClick}>
        Popular
        <svg className='places__sorting-arrow' width={7} height={4}>
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortClass}`}>
        {
          Object.values(sortItems).map((item) => (
            <li
              className={`places__option ${item === currentSortItem ? 'places__option--active' : ''}`}
              tabIndex={0}
              key={item}
              onClick={handleSortItemClick}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export { Sort };
