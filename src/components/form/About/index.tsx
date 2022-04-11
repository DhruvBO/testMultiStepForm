import { Box } from "@mui/material";
import React,  { useEffect } from "react";
import styles from "../styles";
import Card from "../../Card";
import CustomBtn from "../../buttons/CustomBtn";
import { useForm } from "react-hook-form";
import InputField from "../../sections/form/InputField/Index";
import { nameError } from "../../../constants/formErrorMessage";
import { aboutData, formTrackerForwardCount } from "../../../redux/actions";
import { useAppDispatch } from "../../../redux/store";

// type typeAboutForm = {
//   fName: string,
//   lName: string,
// }

const About = () => {
 /*  const [storedValues, setStoredValues] = useState<typeAboutForm>({
    fName : "",
    lName: "",
  });  */
  const dispatch = useAppDispatch();
  const { control, handleSubmit, watch, setValue, reset } = useForm({
    mode: "onChange",
  });

  const watchItems = watch();
  // console.log(watchItems);
  useEffect(() => {
    if (Object.keys(watchItems).length !== 0) {
      localStorage.setItem("aboutFormData", JSON.stringify(watchItems));
    }
  }, [watchItems]);

  const gerFormData = () => {
    const localValues = localStorage.getItem("aboutFormData");
    if (localValues) {
      const values = JSON.parse(localValues);
      // setStoredValues(JSON.parse(localValues));
      setValue("fName", values?.fName);
      setValue("lName", values?.lName);
    }
  };
  useEffect(() => {
    gerFormData();
  }, []);

  function onClickHandler(data: any) {
    dispatch(aboutData(data));
    dispatch(formTrackerForwardCount());
  }
  return (
    <Card content="Could you tell us a bit more about yourself">
      <Box sx={styles.btnWrapper}>
        <Box sx={styles.inputField}>
          <InputField
            customStyle={styles.inputField}
            control={control}
            name="fName"
            label="First Name*"
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
            name="lName"
            label="Last Name*"
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
          <CustomBtn label="Next" onClick={handleSubmit(onClickHandler)} />
        </Box>
      </Box>
    </Card>
  );
};

export default About;
