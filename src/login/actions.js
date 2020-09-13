import ActionTypes from '../constants/ActionTypes';
import { replace } from 'connected-react-router';
import { message } from 'antd';


//for action login while login this reducer call
export function login(payload) {
    return (dispatch, getState) => {

        dispatch({ type: ActionTypes.VerifyLoginPending });
        console.log('payload', payload);
        if (payload.username === "demo" && payload.password === "demo@1234") {
            // dispatch({ type: ActionTypes.LoginSuccess });
            sessionStorage.setItem('auth', JSON.stringify(payload));
            sessionStorage.setItem('isLogin', 'true')
            dispatch(loginSuccess(payload));
            // const { location } = getState().router;
            message.success(
                {
                    content: "Login Successful",
                    className: "float-right"
                })
            // const searchParams = new URLSearchParams(location.search);
            dispatch(replace('/dashboard-analysis'));
        }
        else {
            sessionStorage.setItem('isLogin', 'false');
            message.error({
                content: "Username or password is wrong",
                className: "float-right"
            })
            // dispatch(replace('/login'))
        }
    };
}

//on login success this value get return 
export function loginSuccess(payload) {
    return {
        type: ActionTypes.LoginSuccess,
        payload
    };
}

//logout reducer for logout action is dispatch
export function logout() {
    return (dispatch, getState) => {
        const { location } = getState().router;
        encodeURIComponent(
            location.pathname + location.search
        );
        dispatch(
            replace({
                pathname: '/login',
            })
        );
        sessionStorage.removeItem('auth');
        sessionStorage.setItem('isLogin', 'false');
        message.success({
            content: "Logout succesfully",
            className: "float-right"
        })
        dispatch(logoutSuccess());
    };
}

export function logoutSuccess() {
    return {
        type: ActionTypes.LogoutSuccess
    };
}
