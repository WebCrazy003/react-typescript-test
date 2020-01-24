import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import { addUser } from '../../../actions';
import { RootState, User, UsersStateProps, UsersDispatchProps, ForgotUsers } from '../../../reducers/types';
import { getForgotUsers } from '../../../selectors';
import { AuthSignin } from '../../../components/auth';
import { UserList, ForgotUserList } from '../../../components/userlist';

class ContainerSignin extends Component<UsersDispatchProps & UsersStateProps & ForgotUsers> {
  render(): JSX.Element {
    const { onAddUser, users, forgotUsers } = this.props;
    return (
      <Row>
        <Col span={8}>
          <AuthSignin onAddUser={onAddUser} />
        </Col>
        <Col span={8}>
          <UserList users={users} />
        </Col>
        <Col span={8}>
          <ForgotUserList forgotUsers={forgotUsers} />
        </Col>
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
