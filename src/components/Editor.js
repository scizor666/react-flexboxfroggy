import React, {useState} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {updateAnswer} from '../actions';

const renderLineNumbers = () => <div className='editor__lineNumbers'>
    {_.range(1, 11).map(i => <React.Fragment key={i}>{i}<br/></React.Fragment>)}
</div>;

const Editor = props => {
    const [answer, setAnswer] = useState('');

    let handleOnChange = e => {
        setAnswer(e.target.value);
        props.updateAnswer(e.target.value);
    };

    return <div className='editor'>
        {renderLineNumbers()}
        <div className='editor__css'>
            <div className='editor__code'>
                <div className='editor__cssPrepend'>{props.prependCode}</div>
                <textarea className='editor__userCode'
                          autoFocus={true}
                          style={{height: `${props.answerHeight}px`}}
                          onChange={handleOnChange}
                          value={answer}
                />
                <div>}</div>
            </div>
            <button className='editor__next'>Next</button>
        </div>

    </div>;
};

export default connect(null, {updateAnswer})(Editor);
