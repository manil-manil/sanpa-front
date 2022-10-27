import React from "react";
import { atom } from "recoil";

interface IModalData {
  isOpen: boolean;
  title: string | HTMLElement;
  content: null;
  confirmText: "확인";
  cancelText: "";
  onConfirm: null;
  onCancel: null;
}

export const defaultModaldata: IModalData = {
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
