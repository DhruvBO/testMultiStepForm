import { Box } from "@mui/material";
import React, { useEffect } from "react";
import styles from "../styles";
import Card from "../../Card";
import CustomBtn from "../../buttons/CustomBtn";
import { useForm } from "react-hook-form";
import InputField from "../../sections/form/InputField/Index";
import { nameError } from "../../../constants/formErrorMessage";
import { formTrackerForwardCount, workInData } from "../../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
const WorkIn = () => {
  const dispatch = useAppDispatch();

  const persistedData = useAppSelector((state) => state.formData);
  const { control, handleSubmit, watch, setValue, reset } = useForm({
    mode: "onChange",
  });

  const fillPersistedFormData = () => {
    setValue("cName", persistedData.workIn?.cName);
    setValue("jobTitle", persistedData?.workIn?.jobTitle);
  };
  useEffect(() => {
    if (Object.keys(persistedData).length !== 0) fillPersistedFormData();
  }, []);

  const watchItems = watch();
  useEffect(() => {
    if (Object.keys(watchItems).length !== 0) {
      dispatch(workInData(watchItems));
    }
  }, [watchItems]);

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
