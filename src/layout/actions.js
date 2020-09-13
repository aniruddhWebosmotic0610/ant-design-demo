import { replace } from "connected-react-router";

export function setActiveItem(pathname) {
    return (dispatch) => {
        dispatch(replace(pathname))
    }
}
