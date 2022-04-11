import { Box } from "@mui/material";
import React from "react";

import styles from "../styles";
import Card from "../../Card";
import CustomBtn from "../../buttons/CustomBtn";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {  formTrackerForwardCount, lookingForData } from "../../../redux/actions";
const LookingFor = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.formData.formTracker);
  function onClickHandler(selectedOption: string) {
    console.log(selectedOption, count);
    dispatch(lookingForData(selectedOption));
    dispatch(formTrackerForwardCount());
  }

  return (
    <Card content="Welcome!&#128522; what are you looking for?">
      <Box sx={styles.btnWrapper}>
        <CustomBtn
          label="Lead generation bots"
          onClick={() => onClickHandler("Lead generation bots")}
        />
      </Box>
      <Box sx={styles.btnWrapper}>
        <CustomBtn
          label="Multi-step forms"
          onClick={() => onClickHandler("Multi-step forms")}
        />
      </Box>
      <Box sx={styles.btnWrapper}>
        <CustomBtn
          label="Integations"
          onClick={() => onClickHandler("Integations")}
        />
      </Box>
    </Card>
  );
};

export default LookingFor;
