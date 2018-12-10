let EVENT_API_URL =
    'http://localhost:8080/api/event';
let serverurl = 'http://localhost:8080';
export default class EventService {

    static createEvent = event => {
        return fetch(EVENT_API_URL, {
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response =>
            response.json())
    };


    static registerUserForEvent = (userId, event) => {
        return EventService.findVenue(event.venue_id).then(venue => {
            var backendEvent = {
                id: event.id,
                name: event.name.text,
                description: event.description.text.substring(0,Math.min(20,event.description.text.length)),
                category: 101,
                location: venue.address.address_1 + venue.address.city,
                startTime: event.start.local + '',
                endTime: event.end.local + '',
                date: event.end.local + ''
            }

            return fetch(serverurl + '/api/user/' + userId + '/register', {
                body: JSON.stringify(backendEvent),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
        })

    };

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

    static findRegisteredUsers = (eventId) => {
        debugger;
        var obj = {

            link: serverurl + '/api/event/' + eventId + '/user',
            object: {
                method: 'GET'
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

    static findVenue = (venueId) => {
        debugger;
        var obj = {
            link: 'https://www.eventbriteapi.com/v3/venues/' + venueId + '/?token=T7R72VLGMJOJWGPBHTFE',
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