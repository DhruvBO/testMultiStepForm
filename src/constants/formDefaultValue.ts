import { typeBasicFormData, typeDepartmentOption } from "../types";

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

export const departmentDefaultLabel: typeDepartmentOption = {
  optionA: "Marketing",
  optionB: "Sales",
  optionC: "Customer Service",
};
