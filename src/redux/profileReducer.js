import { profileAPI } from '../api/ProfileAPI';

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const GET_STATUS = 'profile/GET_STATUS';
const SAVE_PHOTO = 'profile/SAVE_PHOTO';
const CHANGE_PROFILE = 'profile/CHANGE_PROFILE';
const SAVE_PROFILE = 'profile/SAVE_PROFILE';

let initialState = {
    postMessages: [
        { id: '1', post: 'Hello' },
        { id: '2', post: 'Welcome to twin peaks' },
        { id: '3', post: 'Dreamtown' },
        { id: '4', post: '1990' },
        { id: '5', post: 'Enjoy' }
    ],
    profile: null,
    userStatus: '',
    isMe: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postMessages.length + 1,
                post: action.newPost
            };
            return {
                ...state,
                postMessages: [...state.postMessages, newPost]
            }
        }

        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case GET_STATUS: {
            return {
                ...state,
                userStatus: action.userStatus
            }
        }

        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        case CHANGE_PROFILE: {
            return {
                ...state,
                isMe: action.user
            }
        }

        case SAVE_PROFILE: {
            return {
                ...state,
                profile: {...state.profile, aboutMe: action.profile.aboutMe,
                lookingForAJobDescription: action.profile.lookingForAJobDescription,
                lookingForAJob: action.profile.lookingForAJob,
                contacts: action.profile.contacts}
            }
        }

        default: return state;
    }
}


export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })

const setProfile = (profile) => ({ type: SET_PROFILE, profile });
const getUserStatus = (userStatus) => ({ type: GET_STATUS, userStatus });
const setUserPhoto = (photos) => ({type: SAVE_PHOTO, photos});
const saveProfileInfo = (profile) => ({type: SAVE_PROFILE, profile });
export const changeProfile = (user) => ({type: CHANGE_PROFILE, user});

// ThunkCreator
export const getProfile = (id, isMe) => async (dispatch) => {
    let Response = await profileAPI.getProfile(id);
    dispatch(setProfile(Response.data));
    dispatch(changeProfile(isMe));
}

// export const getStatus = (id) => async (dispatch) => {
//     let Response = await profileAPI.getStatus(id);
//     dispatch(getUserStatus(Response.data));
// }
export const getStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id).then(Response => {
        dispatch(getUserStatus(Response.data));
    });    
}

export const updateStatus = (userStatus) => async (dispatch) => {
    let Response = await profileAPI.setStatus(userStatus);
    if (Response.data.resultCode === 0) {
        dispatch(getUserStatus(userStatus));
    }
}

export const savePhoto = (photos) => async (dispatch) => {
    let Response = await profileAPI.setPhoto(photos);
    if (Response.data.resultCode === 0) {
        dispatch(setUserPhoto(Response.data.data.photos));
    }
}

export const saveProfile = (profile, setError) => async (dispatch) => {
    let Response = await profileAPI.setProfileInfo(profile);
    if (Response.data.resultCode === 0) {
        dispatch(saveProfileInfo(profile));
    }
    else {
        setError('server', { type: 'server', message: Response.data.messages });
    }
}

export default profileReducer;