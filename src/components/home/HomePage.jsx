import { Container, Grid, Typography } from "@mui/material";
import Author from "../author/Author";
import Blog from "../blog/Blog";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container padding={3} spacing={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography variant="h5" component="h3" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Author />
        </Grid>
        <Grid item xs={12} md={9} mt={4}>
          <Typography variant="h5" component="h3" mb={3} fontWeight={700}>
            مقالات
          </Typography>
          <Blog />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
