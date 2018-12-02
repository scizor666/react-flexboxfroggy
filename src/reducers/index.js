import {combineReducers} from 'redux';
import LevelReducer from './LevelReducer'
import AnswerReducer from './AnswerReducer'

const rootReducer = combineReducers({
    answer: AnswerReducer,
    level: LevelReducer
});

export default rootReducer;
