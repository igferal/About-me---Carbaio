import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m Ignacio Fernández and I’m a software developer!</h4>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m Ignacio Fernández and I´m a software developer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
