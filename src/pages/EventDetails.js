import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    API.get(`events/${id}/`).then(res => setEvent(res.data));
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <img
        src={event.image}
        alt={event.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h2>{event.title}</h2>
      <p>{event.description}</p>

      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
      <p><strong>Price:</strong> ₹{event.price}</p>

      <Link to={`/book/${event.id}`}>
        <button>Book Tickets</button>
      </Link>
    </div>
  );
}

export default EventDetails;
