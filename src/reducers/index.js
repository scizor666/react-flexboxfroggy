import {combineReducers} from 'redux';
import LevelReducer from './LevelReducer'
import AnswerReducer from './AnswerReducer'

const rootReducer = combineReducers({
    level: LevelReducer,
    answer: AnswerReducer
});

export default rootReducer;
