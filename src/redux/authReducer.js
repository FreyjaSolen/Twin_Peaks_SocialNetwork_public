import { authAPI } from "../api/AuthAPI";

const STATUS = { SUCCESS: 0, UNKNOWN: 2, CAPCHA: 10 }
const SET_USER_PROFILE = 'auth/SET_USER_PROFILE';
const TOGGLE_FETCH = 'auth/TOGGLE_FETCH';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                ...action.data
            }
        }

        case TOGGLE_FETCH: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default: return state;
    }
}

const setUserProfile = (userId, email, login, isAuth = true) => ({ type: SET_USER_PROFILE, data: { userId, email, login, isAuth } })
const toggleFetch = (isFetching) => ({ type: TOGGLE_FETCH, isFetching })

// ThunkCreator
export const getUserInfo = () => async (dispatch) => {
    dispatch(toggleFetch(true));
    let Response = await authAPI.getMe();

    if (Response.data.resultCode === STATUS.SUCCESS) {
        let { id, email, login } = Response.data.data;
        dispatch(setUserProfile(id, email, login));
    }
    dispatch(toggleFetch(false));
}

export const checkLogin = (email, password, rememberMe, setError, captcha) => async (dispatch) => {
    dispatch(toggleFetch(true));

    let Response = await authAPI.setLogin(email, password, rememberMe, captcha);
    if (Response.data.resultCode === STATUS.SUCCESS) {
        // userId = Response.data.userId;
        dispatch(getUserInfo());
    }
    else if (Response.data.resultCode === STATUS.CAPCHA) {
        let Response = await authAPI.getCapcha();
        setError('password', { type: 'capcha', message: Response.data.url });
    }
    else {
        setError('password', { type: 'server', message: Response.data.messages });
    }
    dispatch(toggleFetch(false));
}

export const outLogin = () => async (dispatch) => {
    dispatch(toggleFetch(true));
    let Response = await authAPI.deleteLogin();
    if (Response.data.resultCode === STATUS.SUCCESS) {
        dispatch(setUserProfile(null, null, null, false));
    }
    dispatch(toggleFetch(false));
}

export default authReducer;