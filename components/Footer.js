// Footer.js

import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #25487b;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2023 MIDNIGHT BREEZE BY DUTCHTIDE STUDIOS. ALL RIGHTS RESERVED. PRIVACY POLICY | TERMS & CONDITIONS</p>
    </StyledFooter>
  );
};

export default Footer;
