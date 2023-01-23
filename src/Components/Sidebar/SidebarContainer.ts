import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import Sidebar from "./Sidebar";
import {InitialStatePropsType} from "../../Redux/sidebar-reducer";

type MapStatePropsType = {
    sideBar: InitialStatePropsType
}
type MapDispatchPropsType = {}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        sideBar: state.sideBar
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {}
}
export type SidebarPropsType = MapStatePropsType & MapDispatchPropsType
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer;
