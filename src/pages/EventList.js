import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";
import { Link,useNavigate } from "react-router-dom";
import FeaturedEvents from "../components/FeaturedEvents";

function EventList() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    getEvents().then((res) => setEvents(res.data));
  }, []);

  // ✅ COMBINED FILTER (CATEGORY + SEARCH)
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;

    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* ✅ HERO SECTION */}
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          background: "#f5f7fa",
          marginBottom: "20px",
          borderRadius: "8px",
        }}
      >
        <h1>Event Booking & Ticketing Platform</h1>
        <p>
          Book events, make secure payments, and access QR-based digital tickets
          instantly.
        </p>
      </div>

      

      <FeaturedEvents />


      {/* ✅ SEARCH BAR */}
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "6px",
            border: "1px solid #237dbd",
          }}
        />
      </div>

      
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {["all", "sports", "music", "performance"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              margin: "0 8px",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor:
                selectedCategory === cat ? "#007bff" : "#e0e0e0",
              color: selectedCategory === cat ? "white" : "#000",
              cursor: "pointer",
            }}
          >
            {cat === "all"
              ? "All"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <h2>Events</h2>

      
      {filteredEvents.length === 0 && (
        <p style={{ textAlign: "center" }}>No events found.</p>
      )}

      {filteredEvents.map((e) => (
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

        {e.image && (
  <img
    src={e.image}
    alt={e.title}
    style={{
      width: "100%",
      height: "180px",
      objectFit: "cover",
      borderRadius: "6px",
      marginBottom: "10px",
      cursor: "pointer",
    }}
    onClick={() => navigate(`/events/${e.id}`)}
  />
)}
  

          <h3>{e.title}</h3>
          <p>
            <b>Location:</b> {e.location}
          </p>
          <p>
            <b>Price:</b> ₹{e.price}
          </p>

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

