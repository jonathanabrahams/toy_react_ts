import { ADD_ITEM } from "../constants/action-types";

export const addItem = (item:string) => ({
    payload: item,
    type: ADD_ITEM
})