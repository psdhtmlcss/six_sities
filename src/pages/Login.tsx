import { useRef, FormEvent } from 'react';
import { useAppDispatch } from 'hooks';
import { loginAction } from 'store/api-actions';
import { AuthData } from 'types';
import { Link } from 'react-router-dom';
import { AppRoute } from 'const';

const formValidate = (value: string) => (value.trim().length !== 0);

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (data: AuthData) => {
    dispatch(loginAction(data));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginInputRef.current !== null && passwordInputRef.current !== null) {
      if (formValidate(passwordInputRef.current.value)) {
        onSubmit(
          {
            email: loginInputRef.current.value,
            password: passwordInputRef.current.value
          }
        );
      }
    }
  };
  return (
    <div className='page__login-container container'>
      <section className='login'>
        <h1 className='login__title'>Sign in</h1>
        <form onSubmit={handleSubmit} className='login__form form' action='#' method='post'>
          <div className='login__input-wrapper form__input-wrapper'>
            <label className='visually-hidden'>E-mail</label>
            <input
              ref={loginInputRef}
              className='login__input form__input'
              type='email'
              name='email'
              placeholder='Email'
              required
            />
          </div>
          <div className='login__input-wrapper form__input-wrapper'>
            <label className='visually-hidden'>Password</label>
            <input
              ref={passwordInputRef}
              className='login__input form__input'
              type='password'
              name='password'
              placeholder='Password'
              required
            />
          </div>
          <button className='login__submit form__submit button' type='submit'>
            Sign in
          </button>
        </form>
      </section>
      <section className='locations locations--login locations--current'>
        <div className='locations__item'>
          <Link className='locations__item-link' to={AppRoute.Main}>
            <span>Amsterdam</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export { Login };
