import React, { useEffect, useState } from "react";
import Card from "../../Card";
import OptionBtn from "../../buttons/CustomBtn";
import { Box } from "@mui/material";
import styles from "../styles";
import { useAppDispatch } from "../../../redux/store";
import {
  departmentData,
  formTrackerForwardCount,
} from "../../../redux/actions";
import { departmentDefaultLabel } from "../../../constants/formDefaultValue";

const Department = () => {
  const dispatch = useAppDispatch();
 /*  const [isSelected, setSelected] = useState(
    [
      {
        optionA: 
          {
            value: departmentDefaultLabel.optionA,
            selected: false,
          },
      },
      {
        optionB: 
          {
            value: departmentDefaultLabel.optionA,
            selected: false,
          },
      },
      {
        optionC: 
        {
          value: departmentDefaultLabel.optionA,
          selected: false,
        },
      },
  ]); */



  const gerFormData = () => {
    const localValue = localStorage.getItem("departmentFormData");
    if (localValue) {
      // const values = JSON.parse(localValues);
      // console.log(localValues)
      /* isSelected.map((option) => {
        if (option === localValue ) {
          setSelected([{...isSelected }, {option.selected : true} ])
        }
      } */
      console.log(localValue);
    }
  };
  useEffect(() => {
    gerFormData();
  }, []);

  function onCLickHandler(selectedOption: string) {
    console.log(selectedOption);
    dispatch(departmentData(selectedOption));
    dispatch(formTrackerForwardCount());
    localStorage.setItem("departmentFormData", selectedOption);
  }

  return (
    <Card content="Great! what department do you work in?">
      <Box sx={styles.btnWrapper}>
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
      </Box>
    </Card>
  );
};

export default Department;
