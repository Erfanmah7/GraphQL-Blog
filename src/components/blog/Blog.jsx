import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST } from "../../graphql/query";
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";

function Blog() {
  const { loading, data, error } = useQuery(GET_POST);
  console.log(data);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error.message}.</h3>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
         <CardEl data={{...post}}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Blog;
