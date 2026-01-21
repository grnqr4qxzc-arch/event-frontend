import { useEffect, useState } from 'react';
import { getMyTickets } from '../services/ticketService';

function MyTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getMyTickets().then(res => setTickets(res.data));
  }, []);

return (
  <div style={{ maxWidth: "800px", margin: "40px auto" }}>
    <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
      My Tickets
    </h2>

    {tickets.map((t, index) => (
      <div
        key={index}
        style={{
          border: "1px solid #751a1a",
          borderRadius: "8px",
          padding: "15px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        <div>
          <p>
            <strong>Event:</strong> {t.event}
          </p>
          <p>
            <strong>Ticket Code:</strong> {t.code}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            {t.is_used ? "Used ❌" : "Valid ✅"}
          </p>
        </div>

        <img
          src={`http://127.0.0.1:8000${t.qr_image}`}
          alt="QR Code"
          width="120"
        />
      </div>
    ))}
  </div>
);

}

export default MyTickets;
