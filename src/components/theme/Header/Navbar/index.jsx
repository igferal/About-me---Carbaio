import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Wrapper>
      <Link to="/">
        <img width="98" src="/icons/carbaio.svg" alt="Carbaio Logo" />
      </Link>
      <Link to="/">Carbaio</Link>
    </Wrapper>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
