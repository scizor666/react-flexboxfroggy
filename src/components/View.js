import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {styleStringFromObject, styleObjectWithCamelizedKeys} from '../utils/CSSUtils';

const View = ({board, style, selector, pondPreset, answer}) => {
    useEffect(() => {
        document.querySelectorAll('.view__lilypads > *[style],.view__frogs > *[style]')
            .forEach(e => e.removeAttribute('style'));

        if (selector) {
            document.querySelectorAll(`.view__lilypads ${selector}`)
                .forEach(e => e.setAttribute('style', styleStringFromObject(style)));

            document.querySelector('#pond').setAttribute('style', pondPreset);
            document.querySelectorAll(`#pond ${selector}`).forEach(e => e.setAttribute('style', answer));
        } else {
            document.querySelector('#pond').setAttribute('style', pondPreset + answer);
        }
    });

    const renderLilyPads = board => board.map((color, i) => <div key={i} className={`lilypad--${color}`}>
        <div className={`lilypad__bg--${color}`}/>
    </div>);

    const renderFrogs = board => board.map((color, i) => <div key={i} className={`frog--${color}`}>
        <div className={`frog__bg--${color}`}/>
    </div>);

    return <section className='view'>
        <div className='view__board'>
            <div className='view__lilypads'
                 style={selector ? {} : styleObjectWithCamelizedKeys(style)}>
                {renderLilyPads(board)}
            </div>
            <div className='view__frogs' id='pond'>{renderFrogs(board)}</div>
        </div>
    </section>
};

const mapStateToProps =
    ({level: {board, style, selector, prependCode}, answer}) => ({
        board, style, selector, answer,
        pondPreset: prependCode.match(/(?:{([^}]+))/)[1] // this solution is rather controversial..
    });

export default connect(mapStateToProps)(View);
