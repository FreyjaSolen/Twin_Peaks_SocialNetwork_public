import * as axios from 'axios'

const apiURL = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create( {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "e5b5cb05-e1f5-4992-8ff6-5e4bf87a15ae"
    }
})

export const authAPI = {
  getMe() {
    return instance.get('auth/me');
    },
    setLogin(email, password, rememberMe = false, captcha=false){
        return instance.post('auth/login', {email, password, rememberMe, captcha} );
    },
    deleteLogin(){
        return instance.delete('auth/login' );
    },
    getCapcha(){
        return instance.get('security/get-captcha-url');
    }
}