import API from './api';

export const getMyTickets = () => {
  return API.get('my-tickets/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
};
