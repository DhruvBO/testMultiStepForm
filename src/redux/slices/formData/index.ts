import { createSlice } from "@reduxjs/toolkit";

interface formDataState {
  lookingFor: string;
  department: string;
  contact: {
    email: string;
    pNo: string;
  };
  about: {
    fName: string;
    lName: string;
  };
  workIn: {
    cName: string;
    jobTitle: string;
  };
  formTracker: number;
}

const initialState: formDataState = {
  lookingFor: "",
  department: "",
  contact: {
    email: "",
    pNo: "",
  },
  about: {
    fName: "",
    lName: "",
  },
  workIn: {
    cName: "",
    jobTitle: "",
  },
  formTracker: 1,
};

const formDataSlice = createSlice({
  name: "formData",
  initialState: initialState,
  reducers: {
    formTrackerForwardCount: (state) => {
      state.formTracker++;
    },
    formTrackerBackwardCount: (state) => {
      state.formTracker--;
    },
    lookingForData: (state, action) => {
      state.lookingFor = action.payload;
    },
    departmentData: (state, action) => {
      state.department = action.payload;
    },
    contactData: (state, action) => {
      state.contact = action.payload;
    },
    aboutData: (state, action) => {
      state.about = action.payload;
    },
    workInData: (state, action) => {
      state.workIn = action.payload;
    },
  },
});

export const {
  lookingForData,
  departmentData,
  formTrackerForwardCount,
  formTrackerBackwardCount,
  contactData,
  aboutData,
  workInData,
} = formDataSlice.actions;

export default formDataSlice.reducer;
