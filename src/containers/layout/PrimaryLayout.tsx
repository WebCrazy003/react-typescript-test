import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ContainerSignin } from '../auth';

class PrimaryLayout extends React.Component {
  render(): JSX.Element {
    return (
      <Switch>
        <Route path="/" component={ContainerSignin} />
      </Switch>
    );
  }
}

export default PrimaryLayout;
