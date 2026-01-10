import API from './api';

export const createCheckoutSession = (data) => {
  return API.post('create-checkout-session/', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
};

export const confirmPayment = (data) => {
  return API.post('confirm-payment/', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
};
