let USER_API_URL =
    'http://localhost:8080/api/user';
export default class UserService {
    static login = user => {
        return fetch(USER_API_URL + '/login', {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        }).then(response =>
            response.json())
    };

    static register = user => {
        debugger;
        return fetch(USER_API_URL + '/register', {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        }).then(response =>
            response.json())
    };




    }
