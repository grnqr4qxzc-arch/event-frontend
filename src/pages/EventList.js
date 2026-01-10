import { useEffect, useState } from 'react';
import { getEvents } from '../services/eventService';
import { Link } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(res => setEvents(res.data));
  }, []);

  return ( 
    <div>
      <h2>Events</h2>
      {events.map(e => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>{e.location}</p>
          <p>{e.price}</p>
          <Link to={`/book/${e.id}`}>
          <button>Book</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default EventList;
