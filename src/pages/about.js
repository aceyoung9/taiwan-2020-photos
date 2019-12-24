import React from 'react';

import {
  HeaderBack,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <TextBody as="div">
          <p>This is a little site to hold some travel photos.</p>
          <p>It is strongly based off of <a href='https://lewis-gatsby-starter-blog.netlify.com/'>the Lewis Gatsby Starter</a></p>
          <p>Daily entries may be backfilled.</p>
        </TextBody>
      </Layout>
    </>
  );
};

export default About;
