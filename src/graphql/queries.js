import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      slug
      coverPhoto {
        url
      }
      author {
        id
        name
        avator {
          url
        }
      }
    }
  }
`;

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
      slug
      avator {
        url
      }
    }
  }
`;

const GET_AUTHOR = gql`
  query getAutor($slug: String!) {
    author(where: { slug: $slug }) {
      avator {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_POST = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      title
      coverPhoto {
        url
      }
      content {
        html
      }
      author {
        avator {
          url
        }
        field
        name
      }
    }
  }
`;

export { GET_POSTS, GET_AUTHORS, GET_AUTHOR, GET_POST };
