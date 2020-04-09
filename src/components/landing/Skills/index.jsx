import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Side projects</h1>
        <p>
          Estimates is a React Native app that will make make your sotfware estimation process easier and more precise.
        </p>
        <Button as={AnchorLink} href="#contact">
          More Info
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
