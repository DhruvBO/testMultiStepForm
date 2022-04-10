import { Box } from "@mui/material";
import React from "react";
import styles from "../styles";
import Card from "../../Card";
import CustomBtn from "../../buttons/CustomBtn";
import { useForm } from "react-hook-form";
import InputField from "../../sections/form/InputField/Index";
import { emailError, phoneNoError } from "../../../constants/formErrorMessage";
const Contact = () => {
  const { control, handleSubmit, watch, setValue, reset } = useForm({
    mode: "onChange",
  });

  return (
    <Card content="What is the email and phone number tha twe can reach you the best?">
      <Box sx={styles.btnWrapper}>
        <Box sx={styles.inputField}>
          <InputField
            customStyle={styles.inputField}
            control={control}
            name="email"
            label="Email address*"
            type="email"
            rules={{
              required: {
                value: emailError.reqVal,
                message: emailError.required,
              },
              pattern: {
                value: emailError.pattern,
                message: emailError.message,
              },
            }}
          />
        </Box>
        <Box>
          <InputField
            customStyle={styles.inputField}
            control={control}
            name="pNo"
            label="Phone*"
            type="number"
            rules={{
              required: {
                value: phoneNoError.reqVal,
                message: phoneNoError.required,
              },
              min: {
                value: phoneNoError.minVal,
                message: phoneNoError.min,
              },
              max: {
                value: phoneNoError.maxVal,
                message: phoneNoError.max,
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

export default Contact;
