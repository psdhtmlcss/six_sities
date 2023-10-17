import { createAction } from '@reduxjs/toolkit';

// export const setError = createAction('setError', (value: string | null) => (
//   {
//     payload: value
//   }
// ));

export const redirectToRoute = createAction('redirectToRoute', (value: string) => (
  {
    payload: value
  }
));
