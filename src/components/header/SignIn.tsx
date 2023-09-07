import { Link } from 'react-router-dom';

function SignIn(): JSX.Element {
  return (
    <ul className='header__nav-list'>
      <li className='header__nav-item user'>
        <Link to='/login' className='header__nav-link header__nav-link--profile'>
          <div className='header__avatar-wrapper user__avatar-wrapper' />
          <span className='header__login'>Sign in</span>
        </Link>
      </li>
    </ul>
  );
}

export { SignIn };
