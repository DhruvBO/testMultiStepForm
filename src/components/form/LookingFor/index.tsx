import { Box } from "@mui/material";
import React from "react";

import styles from "../styles";
import Card from "../../Card";
import CustomBtn from "../../buttons/CustomBtn";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  formTrackerForwardCount,
  lookingForData,
} from "../../../redux/actions";
import { lookingForLabel } from "../../../constants/formDefaultValue";
const LookingFor = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.formData.formTracker);
  const selectedLabel = useAppSelector((state) => state.formData.lookingFor);
  function onClickHandler(selectedOption: string) {
    console.log(selectedOption, count);
    dispatch(lookingForData(selectedOption));
    dispatch(formTrackerForwardCount());
  }

  return (
    <Card content="Welcome!&#128522; what are you looking for?">
      {lookingForLabel.map((label) => {
        if (label == selectedLabel) {
          return (
            <Box sx={styles.btnWrapper} key={label}>
              <CustomBtn
                color="#23bf08"
                label={label}
                onClick={() => onClickHandler(label)}
                
              />
            </Box>
          );
        } else {
          return (
            <Box sx={styles.btnWrapper} key={label}>
              <CustomBtn label={label}  onClick={() => onClickHandler(label)} />
            </Box>
          );
        }
      })}
      {/*  <Box sx={styles.btnWrapper}>
        <CustomBtn
          label={lookingForLabel[0]}
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
      </Box> */}
    </Card>
  );
};

export default LookingFor;
