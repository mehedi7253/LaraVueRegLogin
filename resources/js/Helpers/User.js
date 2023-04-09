import Token from './Token'
import AuthStorage from './AuthStorage'

class User {
    responseAfterLogin (response) {
        const access_token = response.data.access_token
        const user = response.data.user.id
        // const user_id = response.data.user.id;
        // const user_name = response.data.user.name;
        // if(Token.isValidToken(access_token)) {
        //     AuthStorage.store(access_token, user_id, user_name);
        // }
        if(Token.isValidToken(access_token)) {
            AuthStorage.store(access_token, user);
        }
    }

    hasTokenInStorage() {
        const getTokenFromStorage = localStorage.getItem('token');
        if (getTokenFromStorage) {
            return Token.isValidToken(getTokenFromStorage) ? true : false;
        }

        return false;
    }

    isLoggedIn() {
        return this.hasTokenInStorage();
    }

    logout() {
        AuthStorage.clear();
        window.location = '/'
    }

    user() {
        if(this.isLoggedIn) {

            try {
                return JSON.parse(localStorage.getItem('user'));
              } catch (err) {
                console.log('Error: ', err.message);
              }
        }
    }

    userId() {
        if(this.isLoggedIn) {
            return localStorage.getItem('user_id');
        }
        return false;
    }
}

export default User = new User();
