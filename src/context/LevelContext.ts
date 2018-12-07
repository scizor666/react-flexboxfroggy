import React from "react";
import {getLevelData} from "../store/configureStore";
import ILevel from "../types/ILevel";

const LevelContext = React.createContext((getLevelData(0)as ILevel));

export default LevelContext;
