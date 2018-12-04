import {connect} from 'react-redux';
import View from '../components/View';

const mapStateToProps =
    ({level: {board, style, selector, prependCode}, answer}: any) => ({
        answer: answer ? answer : '', board,
        pondPreset: prependCode.match(/(?:{([^}]+))/)![1],
        selector, style// this solution is rather controversial..
    });

export default connect(mapStateToProps)(View);
