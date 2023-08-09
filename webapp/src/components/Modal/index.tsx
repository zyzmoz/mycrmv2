import { Close } from "@mui/icons-material";
import { Box, Button, Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { close } from "../../reducers/modalSlice";

interface IModalProps {
  isOpen: boolean;
  modalId: string | null;
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
  // p: 4,
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

  const ModalContent = () => {
    return <>Hello {modalId}</>;
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} onClick={handleClose}>
        <Button variant="text" color="inherit" sx={{ minWidth: "unset" }}>
          <Close />
        </Button>
        <Box sx={{ padding: "0 .6rem .6rem .6rem"}}>
          <ModalContent />
        </Box>
      </Box>
    </Modal>
  );
};
