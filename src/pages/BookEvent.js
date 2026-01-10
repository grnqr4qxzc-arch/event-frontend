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
    <div>
      <h2>Book Tickets</h2>

      <label>Number of Tickets</label>
      <input
        type="number"
        min="1"
        max="5"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />

      <button onClick={book}>Proceed to Payment</button>
    </div>
  );
}

export default BookEvent;
