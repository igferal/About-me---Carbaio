import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import Switch from 'react-switch';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';
import sunIcon from './icons/sun.svg';
import moonIcon from './icons/moon.svg';

const Navbar = () => (
  <Wrapper as={Container}>
    <Wrapper>
      <Link to="/">
        <img width="98" src="/icons/carbaio.svg" alt="Carbaio Logo" />
      </Link>
      <Link to="/">Carbaio</Link>
    </Wrapper>
    <Wrapper>
      <NavbarLinks desktop />
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <Switch
            onChange={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
            checked={theme === 'light'}
            onColor="#222"
            offColor="#222"
            uncheckedIcon={<img src={moonIcon} alt="moon icon" />}
            checkedIcon={<img src={sunIcon} alt="sun icon" />}
            boxShadow="0 0 1px 2px #478E6E"
            activeBoxShadow="0 0 1px 2px #085342"
          />
        )}
      </ThemeToggler>
    </Wrapper>
  </Wrapper>
);

export default Navbar;
