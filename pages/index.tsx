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

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.formData.formTracker);

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
      return <FormDataModal />;
  }
};

export default Home;
