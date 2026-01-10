import { useState } from 'react';
import { login } from '../services/authService';

function Login() {
  const [form, setForm] = useState({});

  const submit = async () => {
    const res = await login(form);

    localStorage.setItem("token", res.data.access);
    alert("Logged in");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username"
        onChange={e => setForm({...form, username: e.target.value})} />
      <input type="password" placeholder="Password"
        onChange={e => setForm({...form, password: e.target.value})} />

      <button onClick={submit}>Login</button>
    </div>
  );
}

export default Login;
