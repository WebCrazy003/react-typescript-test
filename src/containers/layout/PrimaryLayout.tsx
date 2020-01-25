import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { ContainerSignin } from '../auth';
import { Navbar } from '.';

const { Footer, Content } = Layout;

const StyledContent = styled(Content)`
  padding: 0 50px;
`;

const StyledDiv1 = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
`;

const StyledDiv2 = styled.div`
  height: 100px;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

class PrimaryLayout extends React.Component {
  render(): JSX.Element {
    return (
      <Layout className="layout">
        <Navbar />
        <StyledContent>
          <StyledDiv1>
            <Switch>
              <Route path="/" component={ContainerSignin} />
            </Switch>
            <StyledDiv2 />
          </StyledDiv1>
        </StyledContent>
        <StyledFooter>Ant Design @2020 Created by Kevin</StyledFooter>
      </Layout>
    );
  }
}

export default PrimaryLayout;
