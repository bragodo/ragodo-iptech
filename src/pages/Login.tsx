import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('loggedInUser', username);
      navigate('/dashboard', { state: { username } });
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#2F80ED', color: 'white', border: 'none', borderRadius: '5px' }}>
          Login
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Don't have an account? <a href="/register" style={{ color: '#2F80ED' }}>Register</a>
      </p>
    </div>
  );
};

export default Login;