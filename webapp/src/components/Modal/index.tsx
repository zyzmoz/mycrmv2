import { Close } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { close } from "../../reducers/modalSlice";
import { getModal } from "./modalUtils";

interface IModalProps {
  isOpen: boolean;
  modalId: string | "";
  title?: string;
  onClose?: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #d6d6d6",
  borderRadius: "5px",
  boxShadow: 24,
  // p: 1,
};

export const ModalComponent: React.FC<IModalProps> = ({
  isOpen,
  modalId,
  onClose,
}) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    onClose?.();
    // Change Visibility
    dispatch(close());
  };

  const modalData = getModal(modalId);

  if (!modalData) return <></>;

  const ModalContent = () => {
    const { Content } = modalData;
    return <Content onClose={handleClose} />;
  };

  return (
    <Modal
      open={isOpen}
      // Maybe we don't want to dismiss the modal when clicked outside
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", marginBottom: 2, alignItems: 'center', backgroundColor: "#f5f5f5" }}>
          <Button
            variant="text"
            color="inherit"
            sx={{ minWidth: "unset" }}
            onClick={handleClose}
          >
            <Close />
          </Button>
          <Typography component="span">{modalData?.title}</Typography>
        </Box>
        <Box sx={{ padding: "0 .6rem .6rem .6rem" }}>
          <ModalContent />
        </Box>
      </Box>
    </Modal>
  );
};
