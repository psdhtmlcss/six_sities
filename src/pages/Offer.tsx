import { useEffect } from 'react';
import { useAppSelector, useAppDispatch, usePageId } from 'hooks';
import { fetchOfferAction } from 'store/api-actions';
import { OfferProperty } from 'components';
import { LoadingScreen } from 'pages';
import { CurrentOffer } from 'types';

function Offer(): JSX.Element {
  const id = usePageId();
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector((state) => state.currentOffer);
  const isLoading = useAppSelector((state) => state.isLoadingData);

  useEffect(() => {
    if (!currentOffer.offer || currentOffer?.offer?.id !== Number(id)) {
      dispatch(fetchOfferAction(id as string));
    }
  }, [id]);

  if (isLoading) {
    return ( <LoadingScreen /> );
  }

  if (currentOffer.offer) {
    return (
      <OfferProperty currentOffer={currentOffer as CurrentOffer} />
    );
  }

  return (
    <h1>Error</h1>
  );
}

export { Offer };
