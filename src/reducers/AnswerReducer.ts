import {AnyAction} from "redux";
import {UPDATE_ANSWER,} from '../actions/types';

export default (state = {}, action: AnyAction) => {
    switch (action.type) {
        case UPDATE_ANSWER:
            return {...state, [action.payload.current]: action.payload.answer};
        default:
            return state;
    }
}
