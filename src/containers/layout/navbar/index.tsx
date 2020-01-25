import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import { Logo } from '../../../assets';

const { Header } = Layout;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledH2 = styled.h2`
  color: #fff;
  margin: 0px;
`;

const Navbar = (): JSX.Element => (
  <Header>
    <StyledDiv>
      <img width={40} height={40} alt="Logo" src={Logo} />
      <StyledH2>Ant Design</StyledH2>
    </StyledDiv>
  </Header>
);

export default Navbar;
