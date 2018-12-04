import {CHANGE_LEVEL} from '../actions/types';
import {getLevelData} from '../store/configureStore'
import IAction from "../types/IAction";

export default (state = getLevelData(0), action: IAction) => {
    switch (action.type) {
        case CHANGE_LEVEL:
            return {...state, ...getLevelData(action.payload.current - 1)};
        default:
            return state;
    }
}
