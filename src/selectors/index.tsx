import { createSelector } from 'reselect';
import { RootState } from '../reducers/types';

const getUsers = (state: RootState) => state.users.users;

export const getForgotUsers = createSelector([getUsers], users => {
  return users.filter(u => !u.remember);
});
