function SignOut(): JSX.Element {
  return (
    <ul className='header__nav-list'>
      <li className='header__nav-item user'>
        <div className='header__nav-profile'>
          <div className='header__avatar-wrapper user__avatar-wrapper' />
          <span className='header__user-name user__name'>
            Oliver.conner@gmail.com
          </span>
        </div>
      </li>
      <li className='header__nav-item'>
        <a className='header__nav-link' href='#'>
          <span className='header__signout'>Sign out</span>
        </a>
      </li>
    </ul>
  );
}

export { SignOut };
