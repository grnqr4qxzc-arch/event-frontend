import { useState } from 'react';
import { createCheckoutSession } from '../services/bookingService';
import { useParams } from 'react-router-dom';

function BookEvent() {
  const { eventId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const book = async () => {
    const res = await createCheckoutSession({
      event_id: eventId,
      quantity
    });

    window.location.href = res.data.checkout_url;
  };

return (
  <div
    style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
    }}
  >
    <h2 style={{ marginBottom: "20px" }}>Book Tickets</h2>

    <label style={{ display: "block", marginBottom: "8px" }}>
      Number of Tickets
    </label>

    <input
      type="number"
      min="1"
      max="5"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      style={{
        width: "100%",
        padding: "8px",
        marginBottom: "20px",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />

    <button
      onClick={book}
      style={{
        width: "100%",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Proceed to Payment
    </button>
  </div>
);

}

export default BookEvent;
