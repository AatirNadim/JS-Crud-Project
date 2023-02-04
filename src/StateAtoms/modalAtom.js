import { atom } from "recoil";

export const modalAtom = atom({
    key: "modalAtom",
    default: {
        selectedModal: "edit__state",
        // selectedModal: "view__state",
        // selectedModal: "delete__state",
    }
})