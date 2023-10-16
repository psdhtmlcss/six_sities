import { Link } from 'react-router-dom';
import { AppRoute } from 'const';
import { logoutAction } from 'store/api-actions';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getUserInfo } from 'store/user/selectors';

function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getUserInfo);
  return (
    <ul className='header__nav-list'>
      <li className='header__nav-item user'>
        <div className='header__nav-profile'>
          <div className='header__avatar-wrapper user__avatar-wrapper' />
          <span className='header__user-name user__name'>
            {userEmail ? userEmail.email : ''}
          </span>
        </div>
      </li>
      <li className='header__nav-item'>
        <Link
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          className='header__nav-link'
          to={AppRoute.Main}
        >
          <span className='header__signout'>Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export { SignOut };
