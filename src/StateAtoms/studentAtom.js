import { atom } from "recoil";
import { studentObj } from "../Constants/student";

export const studentAtom = atom({
    key: "studentAtom",
    default: studentObj,
});
