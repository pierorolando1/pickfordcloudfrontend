import { Dispatch } from "redux";
import { types } from "../types";

export const startChangeToEn = () => {
    return (dispatch: Dispatch) => {
        localStorage.setItem("leng", "en")
        dispatch(changeToEn())
    }
}

export const startChangeToEs = () => {
    return (dispatch: Dispatch) => {
        localStorage.setItem("leng", "es")
        dispatch(changeToEs())
    }
}

export const changeToEn = () => ({
    type: types.changeToEn
})

export const changeToEs = () => ({
    type: types.changeToEs
})