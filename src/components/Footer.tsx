import React from 'react';
import styled from '@emotion/styled';
import { Link, StaticQuery, graphql } from 'gatsby';

import { heights, colors } from '../styles/variables';

const StyledFooter = styled.footer`
  height: ${heights.footer}px;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
`;

const Logos = styled.div`
  /*  */
`;

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

const TechsLogoImg = styled(LogoImg)`
  opacity: 0.3;
`;

interface ImageFragment {
  childImageSharp: {
    fixed: {
      src: string;
    };
  };
}

interface FooterLogosProps {
  gatsby: ImageFragment;
  ts: ImageFragment;
  github: ImageFragment;
}

export const Footer: React.FC = () => (
  <StaticQuery
    query={graphql`
      fragment ImageFragment on File {
        childImageSharp {
          fixed(width: 64, height: 64) {
            src
          }
        }
      }
      query FooterLogos {
        gatsby: file(relativePath: { eq: "assets/gtsb.png" }) {
          ...ImageFragment
        }
        ts: file(relativePath: { eq: "assets/tpscrpt.png" }) {
          ...ImageFragment
        }
        github: file(relativePath: { eq: "assets/gthb.png" }) {
          ...ImageFragment
        }
      }
    `}
    render={(data: FooterLogosProps) => (
      <StyledFooter>
        <div style={{ width: 32, height: 32 }}>
          <a href="https://github.com/isaldin" target="_blank" rel="noopener noreferrer">
            <LogoImg
              src={data.github.childImageSharp.fixed.src}
              alt=""
              style={{
                marginLeft: 10
              }}
            />
          </a>
        </div>
        <div>
          <Logos>
            <TechsLogoImg src={data.gatsby.childImageSharp.fixed.src} alt="" />
            <TechsLogoImg
              src={data.ts.childImageSharp.fixed.src}
              alt=""
              style={{
                marginLeft: 10
              }}
            />
          </Logos>
        </div>
      </StyledFooter>
    )}
  />
);
