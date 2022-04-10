import { Box, Link } from "@mui/material";
import React, { FC } from "react";
import styles from "./styles";

type typeFormCard = {
  children: React.ReactNode;
  content: string;
};
const FormCard: FC<typeFormCard> = ({ children, content }) => {
  return (
    <Box sx={styles.cardWrapper}>
      <Box sx={styles.card}>
        <Box>
          <Link href="" sx={{ ...styles.navBtn, ...styles.closeBtn }}>
            +
          </Link>
          <Link href="" sx={styles.navBtn}>
            &lt;
          </Link>
        </Box>
        <Box sx={styles.progressBar}>
          <Box sx={styles.progress}></Box>
        </Box>
        {/* <Box sx={styles.heading} component="h1">Looking For</Box> */}
        <Box>{content}</Box>
        <Box sx={styles.childSpace}>{children}</Box>
      </Box>
    </Box>
  );
};

export default FormCard;
