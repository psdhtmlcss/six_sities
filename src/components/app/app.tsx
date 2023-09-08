import { Main, Offer, Login, Page404 } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components';
import { Offers } from 'types/offers';

type AppScreenProps = {
  offerCount: number;
  offers: Offers;
}

function App(props: AppScreenProps): JSX.Element {
  const { offerCount, offers } = props;
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main offerCount={offerCount} offers={offers} />} />
        <Route path='offer/:id' element={<Offer />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
