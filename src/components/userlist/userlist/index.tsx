import React from 'react';
import styled from 'styled-components';
import { mapProps } from 'recompose';
import { List } from 'antd';

import { UsersStateProps } from '../../../reducers/types';
import { User } from '../../../reducers/types';

interface StatusProps {
  status: string;
}

const StyledH3 = styled.h3`
  margin-top: '15px';
`;

const TotalUserList = (props: UsersStateProps & StatusProps): JSX.Element => (
  <div className="UserList">
    <StyledH3>{props.status}</StyledH3>
    <List
      size="small"
      bordered
      dataSource={props.users}
      renderItem={(item: User): JSX.Element => (
        <List.Item>
          {item.username}:{item.password}
        </List.Item>
      )}
    />
  </div>
);

const filterByStatus = (remember: boolean): any =>
  mapProps((users: UsersStateProps) => ({
    status: remember ? 'Remember' : 'Forgot',
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
