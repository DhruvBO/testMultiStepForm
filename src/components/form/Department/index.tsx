import React, { useEffect, useState } from "react";
import Card from "../../Card";
import CustomBtn from "../../buttons/CustomBtn";
import { Box } from "@mui/material";
import styles from "../styles";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  departmentData,
  formTrackerForwardCount,
} from "../../../redux/actions";
import { departmentDefaultLabel } from "../../../constants/formDefaultValue";

const Department = () => {
  const dispatch = useAppDispatch();

  const selectedLabel = useAppSelector((state) => state.formData.department);

  const gerFormData = () => {
    const localValue = localStorage.getItem("departmentFormData");
    if (localValue) {
      console.log("after getting", localValue);
    }
  };
  useEffect(() => {
    gerFormData();
  }, []);

  function onClickHandler(selectedOption: string) {
    console.log(selectedOption);
    dispatch(departmentData(selectedOption));
    dispatch(formTrackerForwardCount());
    // localStorage.setItem("departmentFormData", selectedOption);
  }

  return (
    <Card content="Great! what department do you work in?">
      {departmentDefaultLabel.map((label) => {
        console.log(label, selectedLabel)
        if (label === selectedLabel) {
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
      {/* <Box sx={styles.btnWrapper}>
        <OptionBtn
          label={departmentDefaultLabel.optionA}
          onClick={() => onCLickHandler(departmentDefaultLabel.optionA)}
        />
      </Box>
      <Box sx={styles.btnWrapper}>
        <OptionBtn
          label={departmentDefaultLabel.optionB}
          onClick={() => onCLickHandler(departmentDefaultLabel.optionB)}
        />
      </Box>
      <Box sx={styles.btnWrapper}>
        <OptionBtn
          label={departmentDefaultLabel.optionC}
          onClick={() => onCLickHandler(departmentDefaultLabel.optionC)}
        />
      </Box> */}
    </Card>
  );
};

export default Department;
