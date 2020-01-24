import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

import './index.css';
import { UsersDispatchProps, User } from '../../../reducers/types';

const StyledButton = styled(Button)`
  color: #40a9ff;
  border-color: transparent;
  :hover {
    border-color: transparent;
    background: #e6f7ff;
  }
  :focus {
    color: #f5222d;
    border-color: transparent;
    background: rgba(245, 34, 45, 0.2);
  }
`;

const NormalLoginForm = (props: UsersDispatchProps & FormComponentProps): JSX.Element => {
  const { getFieldDecorator } = props.form;
  const { register, handleSubmit, setValue } = useForm<User>();

  const onSubmit = (data: User): void => {
    console.log('data=', data);
    if (props.onAddUser) {
      props.onAddUser({ username: data.username, password: data.password, remember: data.remember });
    }
  };

  React.useEffect(() => {
    register({ name: 'username' }, { required: true });
    register({ name: 'password' }, { required: true });
    register({ name: 'remember' }, { required: false });
    setValue('remember', true);
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', { rules: [{ required: true, message: 'Please input your username!' }] })(
            <Input
              name="username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              onChange={(e): void => {
                setValue('username', e.target.value);
              }}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your username!' }] })(
            <Input
              name="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="password"
              onChange={(e): void => {
                setValue('password', e.target.value);
              }}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox
              name="remember"
              onChange={(e): void => {
                setValue('remember', e.target.checked);
              }}
            >
              Remember me
            </Checkbox>,
          )}
          <a className="login-form-forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          or <StyledButton>register now!</StyledButton>
        </Form.Item>
      </Form>
    </div>
  );
};

const AuthSignin = Form.create<UsersDispatchProps & FormComponentProps>({ name: 'normal_login' })(NormalLoginForm);

export default AuthSignin;
