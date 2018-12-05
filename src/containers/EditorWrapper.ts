import {connect} from "react-redux";
import {withRouter} from "react-router";
import {updateAnswer} from '../actions';
import Editor from '../components/Editor';
import IStore from "../types/IStore";

const mapStateToProps = ({level, answers}: IStore) => ({...level, answer: answers[level.current] || ''});

export default connect(mapStateToProps, {updateAnswer})(withRouter(Editor));
