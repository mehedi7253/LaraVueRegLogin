class AuthStorage {
    storeToken(token) {

        localStorage.setItem('token', token);
    }

    storeUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    store(token, user) {
        this.storeToken(token);
        this.storeUser(user);
    }

    clearAuthCreadentials() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getToken() {
        localStorage.getItem('token');
    }

    getUser() {
        localStorage.getItem('user');
    }
}

export default AuthStorage = new AuthStorage();
