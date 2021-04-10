import * as React from 'react';
import { Header, Container, Nav, LogoPlaceholder, Content } from './styled';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => (
  <>
    <Header>
      <Container>
        <Nav>
          <LogoPlaceholder />
        </Nav>
      </Container>
    </Header>
    <Content>
      <Container>{children}</Container>
    </Content>
  </>
);

export default Layout;
