import React from 'react';
import { Layout } from 'antd';

import { Logo } from '../../../assets';
import './index.css';

const { Header } = Layout;

const Navbar = (): JSX.Element => (
  <Header>
    <div className="wrapper">
      <img width={40} height={40} alt="Logo" src={Logo} />
      <h2 style={{ color: 'white', margin: '0px' }}>Ant Design</h2>
    </div>
  </Header>
);

export default Navbar;
