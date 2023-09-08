import type { Reviews as ReviewsType } from 'types';

type ReviewsScreenProps = {
  reviews: ReviewsType;
}

const MAX_REVIEWS = 10;

const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long'
});

function Reviews({reviews}: ReviewsScreenProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {
        reviews.slice(0, MAX_REVIEWS).map((review) => (
          <li key={review.id} className='reviews__item'>
            <div className='reviews__user user'>
              <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                <img
                  className='reviews__avatar user__avatar'
                  src={review.user.avatarUrl}
                  width={54}
                  height={54}
                  alt={review.user.name}
                />
              </div>
              <span className='reviews__user-name'>{review.user.name}</span>
            </div>
            <div className='reviews__info'>
              <div className='reviews__rating rating'>
                <div className='reviews__stars rating__stars'>
                  <span style={{ width: `${review.rating * 100 / 5}%` }} />
                  <span className='visually-hidden'>Rating</span>
                </div>
              </div>
              <p className='reviews__text'>
                { review.comment }
              </p>
              <time className='reviews__time' dateTime='2019-04-24'>
                { `${formatter.format(new Date(review.date))}` }
              </time>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export { Reviews };
