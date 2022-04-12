import {
  typeBasicFormData,
  typeDepartmentOption,
  typeLookingForOption,
} from "../types";

export const basicFormDefaultValue: typeBasicFormData = {
  fName: "",
  mName: "",
  lName: "",
  email: "",
  age: 18,
  gender: "",
  // pNo: 1234567890,
  address: "",
};

export const departmentDefaultLabel: typeDepartmentOption = [
  "Marketing",
  "Sales",
  "Customer Service",
];

export const lookingForLabel: typeLookingForOption = [
   "Lead generation bots",
  "Multi-step forms",
   "Integations",
];
