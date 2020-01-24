import React from 'react';
import { mapProps } from 'recompose';

import { UsersStateProps } from '../../../reducers/types';
import { UserComponent } from '..';

interface StatusProps {
  status: string;
}

const TotalUserList = (props: UsersStateProps & StatusProps): JSX.Element => (
  <div className="UserList">
    <h3>{props.status} users</h3>
    {props.users && props.users.map(user => <UserComponent user={user} key={user.username} />)}
  </div>
);

const filterByStatus = (remember: boolean): any =>
  mapProps((users: UsersStateProps) => ({
    status: remember ? 'remember' : 'forgot',
    users: users.users.filter(u => u.remember === remember),
  }));

const RememberUsers = filterByStatus(true)(TotalUserList);
const ForgotUsers = filterByStatus(false)(TotalUserList);

const UserList = (props: UsersStateProps): JSX.Element => (
  <div className="App">
    <RememberUsers users={props.users} />
    <ForgotUsers users={props.users} />
  </div>
);

export default UserList;
