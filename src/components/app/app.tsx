import { Main } from 'pages';

type AppScreenProps = {
  offerCount: number;
}

function App(props: AppScreenProps): JSX.Element {
  const { offerCount } = props;
  return <Main offerCount={offerCount} />;
}

export default App;
