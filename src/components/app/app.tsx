import { Main, Offer, Login, Page404 } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components';
import { Offers } from 'types/offers';
import { Cities } from 'types';

type AppScreenProps = {
  offerCount: number;
  offers: Offers;
  cities: Cities;
}

function App(props: AppScreenProps): JSX.Element {
  const { offerCount, offers, cities } = props;
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main offerCount={offerCount} offers={offers} cities={cities} />} />
        <Route path='offer/:id' element={<Offer offers={offers} />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
