import { createSelector } from 'reselect';

import { RootState, UsersState } from '../reducers/types';

const getUsers = (state: RootState): UsersState => state.users;

export const getForgotUsers = createSelector([getUsers], users => {
  return users.users.filter(u => !u.remember);
});
