export default class EventService {
    static findAllEvents = () => {
        debugger;
        var obj = {
            link: 'https://www.eventbriteapi.com/v3/events/search/?token=T7R72VLGMJOJWGPBHTFE',
            object: {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer T7R72VLGMJOJWGPBHTFE'
                }),
                credentials: 'include'
            }
        };
        return fetch(obj.link, obj)
            .then(function (response) {
                return response.text()
                    .then(function (text) {
                        return text ? JSON.parse(text) : []
                    })
            });
    };

    static findEvent = (eventId) => {
        debugger;
        var obj = {
            link: 'https://www.eventbriteapi.com/v3/events/' + eventId + '/?token=T7R72VLGMJOJWGPBHTFE',
            object: {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer T7R72VLGMJOJWGPBHTFE'
                }),
                credentials: 'include'
            }
        };
        return fetch(obj.link, obj)
            .then(function (response) {
                debugger;
                return response.text()
                    .then(function (text) {
                        debugger;
                        return text ? JSON.parse(text) : {}
                    })
            });

    }
    static findQueryEvents = (term) => {
        debugger;
        var obj = {
            link: 'https://www.eventbriteapi.com/v3/events/search/?q=' + term + '&token=T7R72VLGMJOJWGPBHTFE',
            object: {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer T7R72VLGMJOJWGPBHTFE'
                }),
                credentials: 'include'
            }
        };
        return fetch(obj.link, obj)
            .then(function (response) {
                return response.text()
                    .then(function (text) {
                        return text ? JSON.parse(text) : []
                    })
            });
    }
}