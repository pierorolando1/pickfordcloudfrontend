import { Action } from "redux";

import { types } from "../types";

const initialState = {
    leng: localStorage.getItem("leng") == null ? 'en' : localStorage.getItem("leng")
}

export const lenguageReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case types.changeToEn:
            return { ...state, leng: 'en' }

        case types.changeToEs:
            return { ...state, leng: 'es' }

        default:
            return state;
    }
}