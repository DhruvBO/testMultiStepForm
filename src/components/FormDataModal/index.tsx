import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../redux/store";
import styles from "./styles";
const FormDataModal = () => {
  const formData = useAppSelector((state) => state.formData);
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            FormData
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {formData.about?.fName} {formData.about?.lName} 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {formData.department}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {formData.lookingFor}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {formData.workIn?.cName} - {formData.workIn?.jobTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {formData.contact?.email} - {formData.contact?.pNo} 
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default FormDataModal;
