import type { Reviews as ReviewsType } from 'types';
import { ReviewItem } from 'components';

type ReviewsScreenProps = {
  reviews: ReviewsType;
}

const MAX_REVIEWS = 10;

function Reviews({reviews}: ReviewsScreenProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {
        reviews.slice(0, MAX_REVIEWS).map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))
      }
    </ul>
  );
}

export { Reviews };
