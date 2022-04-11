import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles";

type typeProps = {
  label: string;
  onClick: () => void;
};
const CustomBtn = ({ label, onClick }: typeProps) => {
  return (
    <Button sx={styles.btn} variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomBtn;
