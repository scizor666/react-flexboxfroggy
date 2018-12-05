import {combineReducers} from 'redux';
import AnswerReducer from './AnswerReducer'
import LevelReducer from './LevelReducer'

const rootReducer = combineReducers({
    answers: AnswerReducer,
    level: LevelReducer
});

export default rootReducer;
