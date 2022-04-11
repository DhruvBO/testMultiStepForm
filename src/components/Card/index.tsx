import { Box, Link, LinearProgress } from "@mui/material";
import React, { FC } from "react";
import styles from "./styles";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { formTrackerBackwardCount } from "../../redux/actions";
type typeFormCard = {
  children: React.ReactNode;
  content: string;
};

const FormCard: FC<typeFormCard> = ({ children, content }) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.formData.formTracker);
  const onClickHandler = () => {
    dispatch(formTrackerBackwardCount());
  };

  return (
    <Box sx={styles.cardWrapper}>
      <Box sx={styles.card}>
        <Box>
          <Link href="" sx={{ ...styles.navBtn, ...styles.closeBtn }}>
            +
          </Link>
          {count !== 1 && (
            <KeyboardDoubleArrowLeftIcon
              onClick={() => onClickHandler()}
              sx={styles.navBtn}
            />
          )}
        </Box>
        <LinearProgress sx={styles.progressBar} variant="determinate" value={count * 15} />
        {/* <Box sx={styles.heading} component="h1">Looking For</Box> */}
        <Box>{content}</Box>
        <Box sx={styles.childSpace}>{children}</Box>
      </Box>
    </Box>
  );
};

export default FormCard;
