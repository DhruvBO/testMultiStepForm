import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles";

type typeProps = {
  label: string;
};
const CustomBtn = ({ label }: typeProps) => {
  return (
    <Button sx={styles.btn} variant="contained">
      {label}
    </Button>
  );
};

export default CustomBtn;
