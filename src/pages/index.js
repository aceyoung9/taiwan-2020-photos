import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextDate,
} from '../components';

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: ${BREAKPOINT}px) {
    grid-template-columns: repeat(1, 1fr);
  }

  a {
    text-decoration: none;
    background-color: lightgray;
    position: relative;
    &:hover,
    &:focus {
      background-color: white;
      outline: 0;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        border-radius: inherit;
        background: -webkit-linear-gradient(
          240deg,
          hsl(189, 100%, 50%),
          hsl(174, 79%, 49%),
          hsl(188, 81%, 59%),
          hsl(213, 62%, 61%),
          hsl(240, 100%, 70%)
        );
      }
    }

    &:hover:before {
      margin: -5px;
    }

    &:focus:before {
      margin: -10px;
    }
  }
`;

const Post = styled.div`
  min-height: 280px;
  padding: 15px;
`;

const Home = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingXL>Photos from Taiwan</HeadingXL>
        </Hero>
        <GridContainer>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link to={node.fields.slug} key={node.id}>
              <Post>
                <HeadingL>{node.frontmatter.date}</HeadingL>
                <TextDate>{node.frontmatter.title}</TextDate>
              </Post>
            </Link>
          ))}
        </GridContainer>
      </Layout>
    </>
  );
};

export default Home;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
