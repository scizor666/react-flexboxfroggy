import {AnyAction} from "redux";
import {CHANGE_LEVEL, WIN_GAME} from '../actions/types';
import {getLevelData, winData} from '../store/configureStore'
import ILevel from "../types/ILevel";

export default (state = getLevelData(0), action: AnyAction) : ILevel => {
    switch (action.type) {
        case CHANGE_LEVEL:
            return {...state, ...getLevelData(action.payload.current - 1)};
        case WIN_GAME:
            return {...state, ...winData()};
        default:
            return state;
    }
}
