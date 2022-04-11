import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  cardWrapper: {
    height: "max-content",
    padding: "8px 20px",
    margin: "14px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    width: "350px",
    backgroundColor: "#f5fffe",
    flexDirection: "column",
    justifyContent: "start",
    borderRadius: "20px",
    padding: "18px",
    margin: "14px",
    boxShadow:
      "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "400",
  },
  childSpace: {
    margin: "25px 0 10px 0",
    padding: "10px 0",
  },
  progressBar: {
    margin: "15% 0 18% 0",
    backgroundColor: "#e6e6e6",
    // width: "100%",
    borderRadius: "15px",
  },
  progress: {
    backgroundColor: "#00eda2",
    color: "white",
    padding: "1%",
    textAlign: "right",
    fontSize: "20px",
    borderRadius: "15px",
  },

  navBtn: {
    fontSize: "42px",
    width: "32px",
    height: "32px",
    opacity: "0.3",
    color: "#000000",
    textDecoration: "none",

    "&:hover": {
      opacity: 1,
    },
  },
  closeBtn: {
    transform: "rotate(45deg)",
    float: "right",
  },


};

export default styles;
