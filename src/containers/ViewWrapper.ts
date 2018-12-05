import {connect} from 'react-redux';
import View from '../components/View';
import IStore from "../types/IStore";

const mapStateToProps =
    ({level, answers}: IStore) => ({
        ...level,
        answer: answers[level.current] || '',
        pondPreset: level.prependCode.match(/(?:{([^}]+))/)![1]// this solution is rather controversial..
    });

export default connect(mapStateToProps, {})(View);
