import { useState } from 'react';
import { register } from '../services/authService';

function Register() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await register(form);
    alert("Registered Successfully");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username"
        onChange={e => setForm({...form, username: e.target.value})} />
      <input placeholder="Email"
        onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password"
        onChange={e => setForm({...form, password: e.target.value})} />

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Register;
