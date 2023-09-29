import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import { SignOut } from './SignOut';
import { SignIn } from './SignIn';
import { AppRoute, AuthorizationStatus } from 'const';

function Header(): JSX.Element {
  const user = useAuth();
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link to={AppRoute.Main} className='header__logo-link header__logo-link--active'>
              <img
                className='header__logo'
                src='img/logo.svg'
                alt='6 cities logo'
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className='header__nav'>
            {
              user === AuthorizationStatus.Auth ? <SignOut /> : <SignIn />
            }
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Header };
