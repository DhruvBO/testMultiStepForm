import { Box, Button, Link } from "@mui/material";
import React from "react";
import styles from "./styles";
const Header = () => {
  return (
    <Box>
      <Box sx={styles.header}>
        <Box sx={styles.heading} component="h1">Multi-Step Form</Box>
      </Box>
    </Box>
  );
};

export default Header;
