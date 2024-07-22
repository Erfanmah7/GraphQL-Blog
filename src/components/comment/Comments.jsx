import { useQuery } from "@apollo/client";
import React from "react";
import Loader from "../shared/Loader";
import { GET_COMMENT } from "../../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data, errors } = useQuery(GET_COMMENT, {
    variables: { slug },
  });

  if (loading) return null;
  if (errors) return <h3>error...</h3>;
  console.log(data);

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            item
            xs={12}
            key={comment.id}
            m={2}
            p={2}
            border="1px solid silver"
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comments;
