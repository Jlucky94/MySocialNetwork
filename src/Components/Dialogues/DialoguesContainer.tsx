// import {connect} from "react-redux";
// import Dialogues from "./Dialogues";
// import {
//     addMessage,
//     InitialStatePropsType,
//     updateNewMessage
// } from "../../Redux/dialogs-reducer";
// import {AppStateType} from "../../Redux/redux-store";
// import {Dispatch} from "redux";
//
//
// type MapStatePropsType = {
//     dialoguePage: InitialStatePropsType
// }
// type MapDispatchPropsType = {
//     onClickAddMessage: () => void
//     updateNewMessage: (message: string) => void
// }
// export type DialoguePagePropsType = MapStatePropsType & MapDispatchPropsType
//
// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         dialoguePage: state.dialoguePage
//     }
// }
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         onClickAddMessage: () => dispatch(addMessage()),
//         updateNewMessage: (message: string) => dispatch(updateNewMessage(message))
//     }
// }
//
//
// const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)
// export default DialoguesContainer;
export {}
