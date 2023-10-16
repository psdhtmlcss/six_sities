import { AuthorizationStatus, NameSpace } from 'const';
import { State } from 'types';
import { UserInfo } from 'types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getIsFetchingData = (state: State): boolean => state[NameSpace.User].isFetchingData;
export const getUserInfo = (state: State): null | UserInfo => state[NameSpace.User].userInfo;
