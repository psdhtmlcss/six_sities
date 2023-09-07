import { Outlet } from 'react-router-dom';
import { Header } from 'components/header/Header';

function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <main className='page__main page__main--index'>
        <Outlet />
      </main>
    </>
  );
}

export { Layout };
