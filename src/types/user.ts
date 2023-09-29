import { Token } from './token';

export type UserData = {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
  token: Token;
};

export type AuthData = {
  email: string;
  password: string;
};
