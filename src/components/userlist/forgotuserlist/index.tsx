import React, { Component } from 'react';
import { List } from 'antd';

import { ForgotUsers } from '../../../reducers/types';
import { User } from '../../../reducers/types';

class ForgotUserList extends Component<ForgotUsers> {
  render(): JSX.Element {
    const { forgotUsers } = this.props;
    return (
      <div>
        <h3 style={{ marginTop: '15px' }}>Forgot</h3>
        <List
          size="small"
          bordered
          dataSource={forgotUsers}
          renderItem={(item: User): JSX.Element => (
            <List.Item>
              {item.username}:{item.password}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ForgotUserList;
