import {CHANGE_LEVEL, WIN_GAME} from "./types";
import {UPDATE_ANSWER} from "./types";

export const changeLevel = (level: number) => ({type: CHANGE_LEVEL, payload: {current: level}});

export const updateAnswer = (userStyle: string) => ({type: UPDATE_ANSWER, payload: userStyle});

export const winGame = () => ({type: WIN_GAME});
