import { CombinedState } from 'redux';

/**
 * Types
 */
export type User = {
  username: string;
  password: string;
  remember: boolean;
};

export type UsersState = {
  users: User[];
};

export type UserAction = {
  type: string;
  user: User;
};

export type RootState = CombinedState<{ users: UsersState }>;

/**
 * Interfaces
 */
export interface UsersStateProps {
  users: User[];
}

export interface UsersDispatchProps {
  onAddUser: (user: User) => void;
}

export interface UserProps {
  user: User;
}

export interface ForgotUsers {
  forgotUsers: User[];
}
