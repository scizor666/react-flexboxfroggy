import {UPDATE_ANSWER} from "../actions/types";
import IAction from "../types/IAction";

export default (state = '', action: IAction) => {
    switch (action.type) {
        case UPDATE_ANSWER:
            return action.payload;
        default:
            return state;
    }
}
