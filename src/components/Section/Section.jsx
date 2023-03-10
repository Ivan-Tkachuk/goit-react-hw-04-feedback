import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionBox>
    <Title>{title}</Title>
    {children}
  </SectionBox>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
