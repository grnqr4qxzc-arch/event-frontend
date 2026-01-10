import { useEffect } from 'react';
import { confirmPayment } from '../services/bookingService';
import { useSearchParams } from 'react-router-dom';

function PaymentSuccess() {
  const [params] = useSearchParams();

  useEffect(() => {
    const session_id = params.get("session_id");
    const booking_id = params.get("booking_id");

    if (session_id && booking_id) {
      confirmPayment({ session_id, booking_id })
        .then(() => alert("Payment Successful & Tickets Generated"));
    }
  }, []);

  return <h2>Processing Payment...</h2>;
}

export default PaymentSuccess;
