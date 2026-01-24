import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function FeaturedEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("events/?is_featured=true").then(res => setEvents(res.data));
  }, []);

  return (
    <div style={{ display: "flex", overflowX: "auto", gap: "15px", padding: "10px" }}>
      {events.map(e => (
        <img
          key={e.id}
          src={e.image}
          alt={e.title}
          style={{
            height: "160px",
            borderRadius: "10px",
            cursor: "pointer"
          }}
          onClick={() => navigate(`/events/${e.id}`)}
        />
      ))}
    </div>
  );
}

export default FeaturedEvents;
