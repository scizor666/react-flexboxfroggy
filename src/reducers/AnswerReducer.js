import {UPDATE_ANSWER} from "../actions/types";

export default (state = '', action) => {
    switch (action.type) {
        case UPDATE_ANSWER:
            return action.payload;
        default:
            return state;
    }
}
