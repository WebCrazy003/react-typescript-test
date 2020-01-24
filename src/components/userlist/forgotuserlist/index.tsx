import React, { Component } from 'react';

import { ForgotUsers } from '../../../reducers/types';
import { UserComponent } from '..';

class ForgotUserList extends Component<ForgotUsers> {
  render(): JSX.Element {
    const { forgotUsers } = this.props;
    return (
      <div>
        <h3>Forgot Users</h3>
        {forgotUsers && forgotUsers.map(user => <UserComponent user={user} key={user.username} />)}
      </div>
    );
  }
}

export default ForgotUserList;
