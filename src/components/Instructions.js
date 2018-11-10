import React from 'react';

const Instructions = props =>
    <div className='instructions' dangerouslySetInnerHTML={{__html: props.instructions.en}}/>;

export default Instructions;
