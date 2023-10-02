import { useAppSelector } from './useAppSelector';
import { AuthorizationStatus } from 'const';

function useAuth() {
  const auth = useAppSelector((state) => state.authorizationStatus);
  return auth === AuthorizationStatus.Auth;
}

export { useAuth };
