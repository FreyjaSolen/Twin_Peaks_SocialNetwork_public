import * as axios from 'axios'

const apiURL = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create( {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "e5b5cb05-e1f5-4992-8ff6-5e4bf87a15ae"
    }
})

export const profileAPI = {
  getProfile(userId) {
    return  instance.get('profile/' + userId);
    },
    getStatus(userId){
        return instance.get('profile/status/' + userId)
    },
    setStatus(statusText){
        return instance.put('profile/status', {status: statusText} )
    },
    setPhoto(photos){
        let formData = new FormData();
        formData.append("image", photos);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    setProfileInfo(profile) {
        return instance.put('/profile', profile);
    }
}