import { atom } from "recoil";

export const selectedAtom = atom({
    key: "selectedAtom",
    default: {
        selected: 'Add Student',
    },

})