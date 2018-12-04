import {connect} from "react-redux";
import {withRouter} from "react-router";
import {updateAnswer} from '../actions';
import Editor from '../components/Editor';
import ILevel from "../types/ILevel";

const mapStateToProps = ({answer, level}: { answer: string, level: ILevel }) => ({answer, ...level});

export default connect(mapStateToProps, {updateAnswer})(withRouter(Editor));
