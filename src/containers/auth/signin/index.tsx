import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Row, Col, Tag } from 'antd';

import { addUser } from '../../../actions';
import { RootState, User, UsersStateProps, UsersDispatchProps, ForgotUsers } from '../../../reducers/types';
import { getForgotUsers } from '../../../selectors';
import { AuthSignin } from '../../../components/auth';
import { UserList, ForgotUserList } from '../../../components/userlist';

const StyledCol = styled(Col)`
  padding: 0 15px;
`;

class ContainerSignin extends React.Component<UsersDispatchProps & UsersStateProps & ForgotUsers> {
  render(): JSX.Element {
    const { onAddUser, users, forgotUsers } = this.props;
    return (
      <Row>
        <StyledCol xs={24} sm={24} md={8}>
          <AuthSignin onAddUser={onAddUser} />
        </StyledCol>
        <StyledCol xs={24} sm={24} md={8}>
          <Tag color="#2db7f5">Using Recompose</Tag>
          <UserList users={users} />
        </StyledCol>
        <StyledCol xs={24} sm={24} md={8}>
          <Tag color="#2db7f5">Using Reselect</Tag>
          <ForgotUserList forgotUsers={forgotUsers} />
        </StyledCol>
      </Row>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  users: state.users.users,
  forgotUsers: getForgotUsers(state),
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddUser: (user: User) => dispatch(addUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerSignin);
