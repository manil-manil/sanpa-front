import { atom } from "recoil";

export const defaultModaldata = {
  isOpen: false,
  title: "",
  content: null,
  confirmText: "확인",
  cancelText: "",
  onConfirm: null,
  onCancel: null,
};

export const modalAtom = atom({
  key: `modalAtom`,
  default: defaultModaldata,
});
