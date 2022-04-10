import { Box, Button, Link } from "@mui/material";
import React from "react";
import styles from "./styles";
import pageLinks from "../../constants/pageLinks";

const WelcomePage = () => {
  return (
    <Box sx={styles.content}>
      <Link href={pageLinks.basicPageSrc}>
        <Button sx={styles.startBtn} variant="contained">
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default WelcomePage;
