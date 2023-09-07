import { Main, Offer, Login, Page404 } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components';

type AppScreenProps = {
  offerCount: number;
}

function App(props: AppScreenProps): JSX.Element {
  const { offerCount } = props;
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main offerCount={offerCount} />} />
        <Route path='offer/:id' element={<Offer />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
