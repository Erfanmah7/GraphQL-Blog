import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { GET_AUTHOR } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import Loader from "../shared/Loader";
import CardEl from "../shared/CardEl";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (errors) return <h3>error...</h3>;
  const {
    author: { name, field, description, avator, posts },
  } = data;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={avator.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary">
            {field}
          </Typography>
          <Grid item xs={12} mt={5}>
            <div
              style={{ textAlign: "justify", textAlignLast: "center" }}
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(description.html),
              }}
            ></div>
          </Grid>
          <Grid item xs={12} mt={6}>
            <Typography component="h3" variant="h5" fontWeight={700}>
              مقالات {name}
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} mt={6} key={post.id}>
                <CardEl
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
