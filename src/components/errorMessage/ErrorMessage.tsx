import { useAppSelector } from 'hooks';
import './errorMessage.css';
import { getError } from 'store/offers/selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);
  return (error) ? <div className='error-message'>{error}</div> : null;
}

export { ErrorMessage };
