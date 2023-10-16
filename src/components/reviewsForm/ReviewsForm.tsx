import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { useAppDispatch, usePageId, useAppSelector } from 'hooks';
import { sendReviewAction } from 'store/api-actions';
import { getIsFetchingData } from 'store/offers/selectors';
import { getError } from 'store/offers/selectors';

const CommentLength = {
  Min: 50,
  Max: 300
};

function ReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const id = usePageId() as string;
  const isError = Boolean(useAppSelector(getError));
  const isFetching = useAppSelector(getIsFetchingData);
  const formRef = useRef<HTMLFormElement>(null);
  const [rating, setRating] = useState<null | string>(null);
  const [comment, setComment] = useState<null | string>(null);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);

  };
  const handleInput = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    if (evt.target.value.length >= CommentLength.Min && evt.target.value.length <= CommentLength.Max) {
      setComment(evt.target.value);
    } else {
      setComment(null);
    }
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = {
      comment: comment as string,
      rating: Number(rating),
    };
    dispatch(sendReviewAction({data, id}));
    if (!isError) {
      setComment(null);
      setRating(null);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };
  return (
    <form ref={formRef} className='reviews__form form' action='#' method='post' onSubmit={handleSubmit}>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          defaultValue={5}
          id='5-stars'
          type='radio'
          onChange={handleChange}
        />
        <label
          htmlFor='5-stars'
          className='reviews__rating-label form__rating-label'
          title='perfect'
        >
          <svg className='form__star-image' width={37} height={33}>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          defaultValue={4}
          id='4-stars'
          type='radio'
          onChange={handleChange}
        />
        <label
          htmlFor='4-stars'
          className='reviews__rating-label form__rating-label'
          title='good'
        >
          <svg className='form__star-image' width={37} height={33}>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          defaultValue={3}
          id='3-stars'
          type='radio'
          onChange={handleChange}
        />
        <label
          htmlFor='3-stars'
          className='reviews__rating-label form__rating-label'
          title='not bad'
        >
          <svg className='form__star-image' width={37} height={33}>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          defaultValue={2}
          id='2-stars'
          type='radio'
          onChange={handleChange}
        />
        <label
          htmlFor='2-stars'
          className='reviews__rating-label form__rating-label'
          title='badly'
        >
          <svg className='form__star-image' width={37} height={33}>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          defaultValue={1}
          id='1-star'
          type='radio'
          onChange={handleChange}
        />
        <label
          htmlFor='1-star'
          className='reviews__rating-label form__rating-label'
          title='terribly'
        >
          <svg className='form__star-image' width={37} height={33}>
            <use xlinkHref='#icon-star' />
          </svg>
        </label>
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        defaultValue={''}
        minLength={CommentLength.Min}
        maxLength={CommentLength.Max}
        onInput={handleInput}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe
          your stay with at least{' '}
          <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={!(comment && rating) || isFetching}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { ReviewsForm };
