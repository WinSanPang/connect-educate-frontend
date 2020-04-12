export const isUserLoggedIn = () => {
    if (localStorage) {
        const user = JSON.parse(localStorage.getItem('user'));
        return user && user.isAuthenticated && user.token
    }

    return false;
}
