// Layout.js

import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const MainContent = styled.main`
  min-height: calc(100vh - 100px);
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default Layout;
