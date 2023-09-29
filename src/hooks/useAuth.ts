import { useAppSelector } from './useAppSelector';

function useAuth() {
  const auth = useAppSelector((state) => state.authorizationStatus);
  return auth;
}

export { useAuth };
