import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={27}
      >
        طراحی شده با عشق ❤️
      </Typography>
    </footer>
  );
}

export default Footer;
