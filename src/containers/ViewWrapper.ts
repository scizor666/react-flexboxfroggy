import {connect} from 'react-redux';
import View from '../components/View';
import ILevel from "../types/ILevel";

const mapStateToProps =
    ({level, answer}: { level: ILevel, answer: string }) => ({
        ...level, answer,
        pondPreset: level.prependCode.match(/(?:{([^}]+))/)![1]// this solution is rather controversial..
    });

export default connect(mapStateToProps, {})(View);
