import React from 'react';
import {connect} from 'react-redux';
// import ILevel from "../types/ILevel";
import {styleObjectWithCamelizedKeys, styleStringFromObject} from '../utils/CSSUtils';

// type IProps = ILevel & { pondPreset: string, answer: string };

const View = ({board, style, selector, pondPreset, answer}: any) => {
    React.useEffect(() => {
        document.querySelectorAll('.view__lilypads > *[style],.view__frogs > *[style]')
            .forEach(e => e.removeAttribute('style'));

        if (selector) {
            document.querySelectorAll(`.view__lilypads ${selector}`)
                .forEach(e => e.setAttribute('style', styleStringFromObject(style)));

            document.querySelector('#pond')!.setAttribute('style', pondPreset);
            document.querySelectorAll(`#pond ${selector}`).forEach(e => e.setAttribute('style', answer));
        } else {
            document.querySelector('#pond')!.setAttribute('style', pondPreset + answer);
        }
    });

    const renderLilyPads = (board: string[]) => board.map((color, i) =>
        <div key={i} className={`lilypad lilypad--${color}`} data-color={color}>
            <div className={`lilypad__bg--${color}`}/>
        </div>);

    const renderFrogs = (board: string[]) => board.map((color, i) =>
        <div key={i} className={`frog frog--${color}`} data-color={color}>
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
    ({level: {board, style, selector, prependCode}, answer} : any) => ({
        answer: answer ? answer : '', board,
        pondPreset: prependCode.match(/(?:{([^}]+))/)![1],
        selector, style// this solution is rather controversial..
    });

export default connect(mapStateToProps)(View);
