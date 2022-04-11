import { Box } from "@mui/material";
import React, { useEffect } from "react";
import styles from "../styles";
import Card from "../../Card";
import CustomBtn from "../../buttons/CustomBtn";
import { useForm } from "react-hook-form";
import InputField from "../../sections/form/InputField/Index";
import { emailError, phoneNoError } from "../../../constants/formErrorMessage";
import { useAppDispatch } from "../../../redux/store";
import { contactData, formTrackerForwardCount } from "../../../redux/actions";
const Contact = () => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, watch, setValue, reset } = useForm({
    mode: "onChange",
  });


  const watchItems = watch();
  // console.log(watchItems);
  useEffect(() => {
    if (Object.keys(watchItems).length !== 0) {
      localStorage.setItem("contactFormData", JSON.stringify(watchItems));
    }
  }, [watchItems]);

  const gerFormData = () => {
    const localValues = localStorage.getItem("contactFormData");
    if (localValues) {
      const values = JSON.parse(localValues);
      // setStoredValues(JSON.parse(localValues));
      setValue("email", values?.email);
      setValue("pNo", values?.pNo);
    }
  };
  useEffect(() => {
    gerFormData();
  }, []);

  function onClickHandler(data: any) {
    dispatch(contactData(data));
    dispatch(formTrackerForwardCount());
  }

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
          <CustomBtn label="Next" onClick={handleSubmit(onClickHandler)} />
        </Box>
      </Box>
    </Card>
  );
};

export default Contact;
