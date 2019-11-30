import React from "react";
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";

import { Template } from "@types";

const AboutPage: Template = ({ location, pageContext }) => {

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <Section relative>
        <HeadingContainer>
          <HeroHeading>About me</HeroHeading>
        </HeadingContainer>
      </Section>
      <ArticlesGradient />
    </Layout>
  );
};

export default AboutPage;

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const HeadingContainer = styled.div`
  margin: 100px 0;
  font-family: ${p => p.theme.fonts.title};

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const Subheading = styled.p`
  margin: 0 auto;
  max-width: 450px;
  color: ${p => p.theme.colors.grey};
  font-size: 18px;
  font-family: ${p => p.theme.fonts.body};
  line-height: 1.4;
  text-align: center;

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;
