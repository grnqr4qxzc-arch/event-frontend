import { useEffect, useState } from 'react';
import { getMyTickets } from '../services/ticketService';

function MyTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getMyTickets().then(res => setTickets(res.data));
  }, []);

  return (
    <div>
      <h2>My Tickets</h2>

      {tickets.map((t, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <p><strong>Event:</strong> {t.event}</p>
          <p><strong>Ticket Code:</strong> {t.code}</p>
          <p><strong>Status:</strong> {t.is_used ? "Used" : "Valid"}</p>
          <img
            src={`http://127.0.0.1:8000${t.qr_image}`}
            alt="QR Code"
            width="150"
          />
        </div>
      ))}
    </div>
  );
}

export default MyTickets;
