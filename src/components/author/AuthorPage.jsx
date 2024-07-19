import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { GET_AUTHOR } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (errors) return <h3>error...</h3>;
  const { author } = data;
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
          <Avatar src={author.avator.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary">
            {author.field}
          </Typography>
          <Grid item xs={12}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(author.description.html),
              }}
            ></div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
