import React from "react";
import Card from "../../Card";
import OptionBtn from "../../buttons/CustomBtn";
import { Box } from "@mui/material";
import styles from "../styles";
const Department = () => {
  return (
    <Card content="Great! what department do you work in?">
      <Box sx={styles.btnWrapper}>
        <OptionBtn label="Marketing" />
      </Box>
      <Box sx={styles.btnWrapper}>
        <OptionBtn label="Sales" />
      </Box>
      <Box sx={styles.btnWrapper}>
        <OptionBtn label="Customer Service" />
      </Box>
    </Card>
  );
};

export default Department;
