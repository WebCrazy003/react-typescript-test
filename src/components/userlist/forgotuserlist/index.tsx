import React from 'react';
import { List } from 'antd';
import styled from 'styled-components';

import { ForgotUsers } from '../../../reducers/types';
import { User } from '../../../reducers/types';

const StyledH3 = styled.h3`
  margin-top: '15px';
`;

class ForgotUserList extends React.Component<ForgotUsers> {
  render(): JSX.Element {
    const { forgotUsers } = this.props;
    return (
      <div>
        <StyledH3>Forgot</StyledH3>
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
