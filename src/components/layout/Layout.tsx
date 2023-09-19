import { Outlet } from 'react-router-dom';
import { Header } from 'components/header/Header';
import { usePageId } from 'hooks';

function Layout(): JSX.Element {
  const pageId = usePageId();
  const mainClass = pageId ? 'page__main--property' : 'page__main--index';
  return (
    <>
      <Header />
      <main className={`page__main ${mainClass}`}>
        <Outlet />
      </main>
    </>
  );
}

export { Layout };
