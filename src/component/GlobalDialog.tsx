import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useDialogStore } from "../store/dialogStore";

export default function GlobalDialog() {
  const { open, title, message, onConfirm, closeDialog } = useDialogStore();

  return (
    <Dialog open={open} onClose={closeDialog}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="secondary">Cancel</Button>
        <Button
          onClick={() => {
            onConfirm();
            closeDialog();
          }}
          color="primary"
          variant="contained"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
