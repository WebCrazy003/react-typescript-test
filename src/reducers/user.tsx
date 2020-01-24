import { USERS_ADD_REQUEST } from '../actions/actionTypes';
import { UsersState, UserAction } from './types';

const initialState: UsersState = {
  users: [],
};

export default (state = initialState, action: UserAction): UsersState => {
  switch (action.type) {
    case USERS_ADD_REQUEST:
      return {
        users: [...state.users, action.user],
      };
    default:
      return state;
  }
};
