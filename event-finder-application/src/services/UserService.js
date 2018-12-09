let USER_API_URL =
    'http://localhost:8080/api/user';
export default class UserService {
    static login = user => {
        debugger;
        return fetch(USER_API_URL + '/login', {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        }).then(response =>
            response.json())
    }


    static profile = () => {
        debugger;
        return fetch(USER_API_URL + '/profile', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        }).then(response =>
            response.json())
    }

    // static logout = () => {
    //     return fetch(LOGOUT_API_URL, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         credentials: 'include'
    //     }).then(function(response) {
    //         return response.text()
    //             .then(function(text) {
    //                 return text ? JSON.parse(text) : {}
    //             })
    //     });
    // };

    static logout = () => {
        debugger;
        return fetch(USER_API_URL + '/logout', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        }).then(response =>
            response.json())
    }




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
    }
}