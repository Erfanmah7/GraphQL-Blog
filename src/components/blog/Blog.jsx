import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";

function Blog() {
  const { loading, data, errors } = useQuery(GET_POSTS);

  if (loading) return <Loader/>;
  if (errors) return <h3>error...</h3>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEl {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blog;
