import React from 'react';

import { UserProps } from '../../reducers/types';

const UserComponent = (props: UserProps): JSX.Element => (
  <div className="User">
    {props.user.username}:{props.user.password}:{props.user.remember}
  </div>
);

export default UserComponent;
