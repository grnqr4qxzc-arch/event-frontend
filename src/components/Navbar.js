import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        padding: "10px",
        borderBottom: "1px solid #943131",
        marginBottom: "20px",
      }}
    >
      <Link to="/events" style={{ marginRight: "15px" }}>
        Events
      </Link>

      {isLoggedIn && (
        <Link to="/my-tickets" style={{ marginRight: "15px" }}>
          My Tickets
        </Link>
      )}

      {!isLoggedIn ? (
        <>
          <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
}

export default Navbar;
