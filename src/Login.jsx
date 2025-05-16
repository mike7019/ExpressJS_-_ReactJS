import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import '../styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setMensaje('');
    if (!email || !password) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }
    const res = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      setMensaje('¡Inicio de sesión exitoso!');
      setTimeout(() => navigate('/reserva'), 1500);
    } else {
      setMensaje('Correo o contraseña incorrectos.');
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Iniciar Sesión</h2>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button className="cta-btn" type="submit" style={{ width: '100%' }}>
            Entrar
          </button>
          {mensaje && <p className="message">{mensaje}</p>}
        </form>
      </div>
    </Layout>
  );
}
