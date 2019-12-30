import React from 'react';

import { HeaderBack, HeadingXL, Layout, SEO, TextBody } from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <TextBody as="div">
          <p>
            This is a little site to hold some travel photos. I can normally be
            found at <a href="//aceyoung.xyz">aceyoung.xyz</a>
          </p>
          <p>
            The site design is strongly based off of the{' '}
            <a href="https://lewis-gatsby-starter-blog.netlify.com/">
              Lewis Gatsby Starter
            </a>
            .
          </p>
          <p>Daily entries may be backfilled.</p>
        </TextBody>
      </Layout>
    </>
  );
};

export default About;
