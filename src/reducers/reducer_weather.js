import {FETCH_WEATHER} from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
    //        handle the payload
    //        ...state unloads contents from the state array
            return [action.payload.data, ...state];
    }
    return state;
};

