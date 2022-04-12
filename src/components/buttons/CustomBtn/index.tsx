import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles";

type typeProps = {
  label: string;
  onClick: () => void;
  color? : string;
};
const CustomBtn = ({ label, onClick, color }: typeProps) => {
  return (
    <Button sx={{...styles.btn, backgroundColor: `${color}`}}  variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomBtn;
