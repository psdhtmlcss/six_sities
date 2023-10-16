import { useAppSelector } from './useAppSelector';
import { AuthorizationStatus } from 'const';
import { getAuthorizationStatus } from 'store/user/selectors';

function useAuth() {
  const auth = useAppSelector(getAuthorizationStatus);
  return auth === AuthorizationStatus.Auth;
}

export { useAuth };
