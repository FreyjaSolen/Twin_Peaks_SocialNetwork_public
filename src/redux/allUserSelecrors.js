export const getterAllUsersPage = (state) => {
    return state.allUsersPage;
}
export const getterPageSize = (state) => {
    return state.allUsersPage.pageSize;
}
export const getterTotalUsersCount = (state) => {
    return state.allUsersPage.totalUsersCount;
}
export const getterCurrentPage = (state) => {
    return state.allUsersPage.currentPage;
}
export const getterIsFetching = (state) => {
    return state.allUsersPage.isFetching;
}
export const getterIdRequestWait = (state) => {
    return state.allUsersPage.idRequestWait;
}
export const getterIsAuth = (state) => {
    return state.authPage.isAuth;
}
