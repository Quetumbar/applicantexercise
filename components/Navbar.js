// Navbar.js

import Link from 'next/link';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: #7c3cb3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin-left: 1rem;
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`;

const ApplicantHeader = styled.div`
  color: white;
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link href="/">
        <a>
          <Logo src="/img/mb-logo.png" alt="Midnight Breeze Logo" />
        </a>
      </Link>
      <ApplicantHeader>Applicant Exercise - Quetumbar</ApplicantHeader>
      <NavLinks>
        <Link href="/">
          <a>Home</a>
        </Link>
      </NavLinks>
    </StyledNavbar>
  );
};

export default Navbar;
