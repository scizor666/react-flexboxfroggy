import {CHANGE_LEVEL} from "../actions/types";
import {levels} from '../data/levels';

const answerHeight = level => Object.keys(level.style).length * 20;

const colors = {
    g: 'green',
    r: 'red',
    y: 'yellow'
};

const levelBoard = level => level.board.split('').map(e => colors[e]);

export default (state = {
    answerHeight: answerHeight(levels[0]),
    board: levelBoard(levels[0]),
    current: 1,
    instructions: levels[0].instructions,
    max: levels.length,
    prependCode: levels[0].before,
    selector: levels[0].selector,
    style: levels[0].style
}, action) => {
    switch (action.type) {
        case CHANGE_LEVEL:
            let level = levels[action.payload.current - 1];
            return {
                ...state,
                answerHeight: answerHeight(level),
                board: levelBoard(level),
                current: action.payload.current,
                instructions: level.instructions,
                prependCode: level.before,
                selector: level.selector,
                style: level.style
            };
        default:
            return state;
    }
}
