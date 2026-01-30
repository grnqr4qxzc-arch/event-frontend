# 🎬 Event & Movie Booking Frontend

Frontend application for a movie and event booking platform built using React.

## 🔗 Related Repository
Backend API: https://github.com/grnqr4qxzc-arch/Event-manager

---

## ✨ Features
- Public movie listing
- Movie detail page with:
  - Images
  - Showtimes
  - Pricing
- Manager workflows:
  - Add movies
  - Add screens
  - Add shows
- Authentication using JWT
- Role-based navigation and access control

---

## 🛠 Tech Stack
- Frontend: React (Create React App)
- Routing: React Router
- HTTP Client: Axios
- Authentication: JWT (stored in localStorage)

---

## ▶️ Setup Instructions

### Clone the repository
```bash
git clone https://github.com/grnqr4qxzc-arch/event-frontend
cd frontend
Install dependencies
npm install
Start development server
npm start
App runs at:
http://localhost:3000

🔐 Authentication

JWT token stored in localStorage

Token automatically attached to protected API requests

Manager-only routes enforced at backend level

🧠 Engineering Highlights

Clean separation of API logic

Defensive form validation

Graceful handling of backend validation and permission errors

Designed to scale with future dashboard and booking flows

📸 Screenshots

<img width="1920" height="1080" alt="Screenshot (158)" src="https://github.com/user-attachments/assets/73ddc219-e756-4bed-b033-25dbe27706a4" />

