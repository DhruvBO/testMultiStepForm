import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  LookingFor,
  Department,
  Contact,
  About,
  WorkIn,
} from "../src/components/form";
import FormDataModal from "../src/components/FormDataModal";
import { Box } from "@mui/system";
import { useAppSelector } from "../src/redux/store";
import CustomBtn from "../src/components/buttons/CustomBtn";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.formData.formTracker);

  const onClickHadler = () => {
    localStorage.clear();
    window.location.reload();
  };
  switch (count) {
    case 1:
      return <LookingFor />;
    case 2:
      return <Department />;
    case 3:
      return <Contact />;
    case 4:
      return <About />;
    case 5:
      return <WorkIn />;

    default:
      return (
        <Box>
          <FormDataModal />
          <CustomBtn
            onClick={() => onClickHadler()}
            label={" Fill a new form"}
          />
        </Box>
      );
  }
};

export default Home;
