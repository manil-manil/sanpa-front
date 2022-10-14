import { atom } from "recoil";

export const defaultUserData = {};

export const userInfo = atom({
  key: `userInfo`,
  default: defaultUserData,
});
