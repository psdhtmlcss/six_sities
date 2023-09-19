import { AppRoute } from 'const';
import { Link } from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <h1 style={{textAlign: 'center'}}>Page not found.<br /><Link to={AppRoute.Main}>Home</Link></h1>
  );
}

export { Page404 };
