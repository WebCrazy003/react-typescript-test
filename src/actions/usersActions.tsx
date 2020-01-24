import { USERS_ADD_REQUEST } from './actionTypes';
import { User, UserAction } from '../reducers/types';

export const addUser = (user: User): UserAction => {
  return {
    type: USERS_ADD_REQUEST,
    user,
  };
};
