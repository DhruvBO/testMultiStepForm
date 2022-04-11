const nameError = {
  reqValue: true,
  required: "This field is required.",
  minLength: "Atleast 3 character required.",
  minVal: 3,
  maxLength: "Maximum 20 character is allowed.",
  maxVal: 20,
};
const emailError = {
  reqVal: true, 
  required: "This field is required.",
  pattern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: "Please enter valid email address.",
};



const phoneNoError = {
  required: "This field is required.",
  reqVal: true, 
  min: "Please provide 10 digit phone number.",
  max: "Please provide 10 digit phone number.",
  minVal: 1000000000,
  maxVal: 9999999999,
};




export { nameError, emailError, phoneNoError };
