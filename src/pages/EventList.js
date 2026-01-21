import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";
import { Link } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((res) => setEvents(res.data));
  }, []);

  return (
    <div>
      <div
      style={{
        padding: "40px",
        textAlign: "center",
        background: "#f5f7fa",
        marginBottom: "20px",
        borderRadius: "8px"
      }}
    >
      <h1>Event Booking & Ticketing Platform</h1>
      <p>
        Book events, make secure payments, and access QR-based digital tickets instantly.
      </p>
    </div>
    
      <h2>Events</h2>

      {events.map((e) => (
        <div
          key={e.id}
          style={{
            border: "1px solid #1c0b0b",
            padding: "15px",
            margin: "15px 0",
            borderRadius: "8px",
            backgroundColor: "#ebeee4",
            boxShadow: "0 2px 8px rgba(139, 27, 27, 0.71)",
          }}
        >
          <h3>{e.title}</h3>
          <p><b>Location:</b> {e.location}</p>
          <p><b>Price:</b> ₹{e.price}</p>

          <Link to={`/book/${e.id}`}>
            <button
              style={{
                padding: "8px 12px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Book Tickets
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default EventList;
