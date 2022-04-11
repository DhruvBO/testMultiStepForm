import { Box } from "@mui/material";
import React, { useEffect } from "react";
import styles from "../styles";
import Card from "../../Card";
import CustomBtn from "../../buttons/CustomBtn";
import { useForm } from "react-hook-form";
import InputField from "../../sections/form/InputField/Index";
import { nameError } from "../../../constants/formErrorMessage";
import { formTrackerForwardCount, workInData } from "../../../redux/actions";
import { useAppDispatch } from "../../../redux/store";
const WorkIn = () => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, watch, setValue, reset } = useForm({
    mode: "onChange",
  });

  const watchItems = watch();
  // console.log(watchItems);
  useEffect(() => {
    if (Object.keys(watchItems).length !== 0) {
      localStorage.setItem("workFormData", JSON.stringify(watchItems));
    }
  }, [watchItems]);

  const gerFormData = () => {
    const localValues = localStorage.getItem("workFormData");
    if (localValues) {
      const values = JSON.parse(localValues);
      // setStoredValues(JSON.parse(localValues));
      setValue("cName", values?.cName);
      setValue("jobTitle", values?.jobTitle);
    }
  };
  useEffect(() => {
    gerFormData();
  }, []);

  function onClickHandler(data: any) {
    dispatch(workInData(data));
    dispatch(formTrackerForwardCount());
  }
  return (
    <Card content="Thanks! Just a few more detail and we are done!">
      <Box sx={styles.btnWrapper}>
        <Box sx={styles.inputField}>
          <InputField
            customStyle={styles.inputField}
            control={control}
            name="cName"
            label="Comapany Name*"
            type="text"
            rules={{
              required: {
                value: nameError.reqValue,
                message: nameError.required,
              },
              minLength: {
                value: nameError.minVal,
                message: nameError.minLength,
              },
              maxLength: {
                value: nameError.maxVal,
                message: nameError.maxLength,
              },
            }}
          />
        </Box>
        <Box>
          <InputField
            customStyle={styles.inputField}
            control={control}
            name="jobTitle"
            label="Job Title*"
            type="text"
            rules={{
              required: {
                value: nameError.reqValue,
                message: nameError.required,
              },
              minLength: {
                value: nameError.minVal,
                message: nameError.minLength,
              },
              maxLength: {
                value: nameError.maxVal,
                message: nameError.maxLength,
              },
            }}
          />
        </Box>
        <Box sx={styles.nextBtn}>
          <CustomBtn
            label="Request Demo"
            onClick={handleSubmit(onClickHandler)}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default WorkIn;
