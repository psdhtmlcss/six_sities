import { Main, Offer, Login, Page404, LoadingScreen } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components';
import { AppRoute, AuthorizationStatus } from 'const';
import { useAppSelector } from 'hooks';
import { getAuthorizationStatus } from 'store/user/selectors';
import { getIsLoadingOffers } from 'store/offers/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoadingData = useAppSelector(getIsLoadingOffers);

  if (authorizationStatus === AuthorizationStatus.Unknown || isLoadingData) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={`${AppRoute.Offer}:id`} element={<Offer />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.NotFound} element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
