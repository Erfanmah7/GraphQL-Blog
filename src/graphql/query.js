import { gql } from "@apollo/client";

const GET_POST = gql`
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

export { GET_POST };
