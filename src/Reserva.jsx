import { useState } from 'react';
import Layout from './Layout';
import '../styles.css';

export default function Reserva() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setMensaje('');
    if (!nombre || !email || !fecha) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }
    const res = await fetch('http://localhost:4000/api/reserva', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, fecha })
    });
    const data = await res.json();
    setMensaje(data.message);
    if (data.success) {
      setNombre('');
      setEmail('');
      setFecha('');
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <form className="reserva-form" onSubmit={handleSubmit}>
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Reserva tu experiencia</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            required
          />
          <button className="cta-btn" type="submit" style={{ width: '100%' }}>
            Reservar
          </button>
          {mensaje && <p className="message">{mensaje}</p>}
        </form>
      </div>
    </Layout>
  );
}
