import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { ContainerSignin } from '../auth';
import { Navbar } from '.';

const { Footer, Content } = Layout;

class PrimaryLayout extends React.Component {
  render(): JSX.Element {
    return (
      <Layout className="layout">
        <Navbar />
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <Route path="/" component={ContainerSignin} />
            </Switch>
            <div style={{ height: '100px' }} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design @2020 Created by Kevin</Footer>
      </Layout>
    );
  }
}

export default PrimaryLayout;
