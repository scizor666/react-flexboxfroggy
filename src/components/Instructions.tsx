import React from 'react';
import IInstructions from "../types/IInstructions";

const Instructions = (props : {instructions: IInstructions}) =>
    <div className='instructions' dangerouslySetInnerHTML={{__html: props.instructions.en}}/>;

export default Instructions;
