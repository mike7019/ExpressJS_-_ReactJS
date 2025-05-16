import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} (${duration}ms)`);
  });
  next();
});

const USER = { email: 'usuario@ejemplo.com', password: '1234' };

app.post('/api/login', (req, res) => {
  console.log('POST /api/login', req.body);
  const { email, password } = req.body;
  if (email === USER.email && password === USER.password) {
    console.log('Login exitoso');
    return res.json({ success: true });
  }
  console.log('Login fallido');
  res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos.' });
});

app.post('/api/reserva', (req, res) => {
  console.log('POST /api/reserva', req.body);
  const { nombre, email, fecha } = req.body;
  if (!nombre || !email || !fecha) {
    console.log('Reserva fallida: campos incompletos');
    return res.status(400).json({ success: false, message: 'Por favor, completa todos los campos.' });
  }
  console.log('Reserva exitosa');
  res.json({ success: true, message: '¡Reserva exitosa! Nos pondremos en contacto contigo pronto.' });
});

app.listen(4000, () => console.log('Backend corriendo en http://localhost:4000'));
