import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { Link, StaticQuery, graphql } from 'gatsby';

import { heights, dimensions, colors, breakpoints } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

import Container from './Container';

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};

  @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
    justify-content: center;
    display: flex;
  }
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
    display: none;
  }
`;

interface HeaderProps {
  title: string;
}

interface StaticQueryProps {
  file: {
    publicURL: string;
  };
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StaticQuery
    query={graphql`
      query LogoImgQuery {
        file(relativePath: { eq: "assets/logo.png" }) {
          publicURL
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <StyledHeader>
        <HeaderInner>
          <Link to="/">
            <img
              src={data.file.publicURL}
              alt=""
              style={{
                height: '32px',
                width: 'auto'
              }}
            />
          </Link>
          <HomepageLink to="/">{title}</HomepageLink>
        </HeaderInner>
      </StyledHeader>
    )}
  />
);

export default Header;
