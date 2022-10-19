import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Dialog,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { defaultModaldata, modalAtom } from "../../../recoil/modal";

import style from "./modal.css";

export default function DialogComponent() {
  const [state, setState] = useRecoilState(modalAtom);
  const handleClose = () => {
    setState({ ...defaultModaldata });
  };

  const handleConfirm = () => {
    if (state.onConfirm) state.onConfirm();
    handleClose();
  };

  return (
    <div>
      <Dialog open={state.isOpen} onClose={handleClose}>
        <DialogTitle>{state.title}</DialogTitle>
        <DialogContent>{state.content}</DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>{state.confirmText}</Button>
          {state.cancelText && (
            <Button onClick={handleConfirm}>{state.cancelText}</Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
