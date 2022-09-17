import * as axios from 'axios'

const apiURL = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create( {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "e5b5cb05-e1f5-4992-8ff6-5e4bf87a15ae"
    }
})

export const allUsersAPI = {
  getAllUsers(currentPage = 1, pageSize = 14) {
    return  instance.get('users?page=' + currentPage + '&count=' + pageSize);
    },
    unFollowApi(id) {
      return  instance.delete('follow/' + id);
      },
    followApi(id) {
        return  instance.post('follow/' + id, {});
        }
}