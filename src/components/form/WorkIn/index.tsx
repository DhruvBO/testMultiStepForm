import { Box } from "@mui/material";
import React from "react";
import styles from "../styles";
import Card from "../../Card";
import CustomBtn from "../../buttons/CustomBtn";
import { useForm } from "react-hook-form";
import InputField from "../../sections/form/InputField/Index";
import { nameError } from "../../../constants/formErrorMessage";
const WorkIn = () => {
  const { control, handleSubmit, watch, setValue, reset } = useForm({
    mode: "onChange",
  });
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
          <CustomBtn label="Next" />
        </Box>
      </Box>
    </Card>
  );
};

export default WorkIn;
