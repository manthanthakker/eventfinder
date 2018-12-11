import React from 'react'

const EventCard = ({event, index}) =>
    <div id={index} className="card" styles={{width: '18rem'}}>
        <div className="card-body">
            <h3 className="card-title justify-content-center">
                {event.name}
            </h3>
        </div>
    </div>

export default EventCard
