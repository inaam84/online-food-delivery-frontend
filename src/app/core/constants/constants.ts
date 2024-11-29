//const apiLoginUrl = 'https://dummyjson.com/auth/login';
const apiUrl = 'http://onlinefooddeliverybackend.test/api';

export const ApiEndPoint = {
    Auth: {
        Register: `${apiUrl}/register`,
        Login: `${apiUrl}/login`,
        Profile: `${apiUrl}/profile`,
    },
}

export const LocalStorage = {
    token: 'USER_TOKEN',
}