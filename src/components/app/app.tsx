import { Main, Offer, Login, Page404 } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components';
import { AppRoute } from 'const';

function App(): JSX.Element {
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
