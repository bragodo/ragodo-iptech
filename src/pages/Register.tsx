import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Store registration data temporarily (simulate email verification)
    localStorage.setItem('pendingUser', JSON.stringify(form));

    setEmailSent(true); // show "check your email" message
  };

  const handleEmailVerification = () => {
    // Simulate verification
    localStorage.setItem('loggedInUser', form.username);
    navigate('/dashboard', { state: { username: form.username } });
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
      {!emailSent ? (
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            width: '300px',
          }}
        >
          <h2>Verify Your Email</h2>
          <p>We have sent a verification link to your email: <b>{form.email}</b></p>
          <p>Click the button below to simulate email verification.</p>
          <button onClick={handleEmailVerification}>Verify Email</button>
        </div>
      )}
    </div>
  );
};

export default Register;