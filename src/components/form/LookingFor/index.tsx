import { Box } from "@mui/material";
import React from "react";
import styles from "../styles";
import Card from "../../Card";
import CustomBtn from "../../buttons/CustomBtn";
const LookingFor = () => {
  return (
    <Card content="Welcome!&#128522; what are you looking for?">
      <Box sx={styles.btnWrapper}>
        <CustomBtn label="Lead generation bots" />
      </Box>
      <Box sx={styles.btnWrapper}>
        <CustomBtn label="Multi-step forms" />
      </Box>
      <Box sx={styles.btnWrapper}>
        <CustomBtn label="Integations" />
      </Box>
    </Card>
  );
};

export default LookingFor;
