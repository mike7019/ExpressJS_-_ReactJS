import { Link } from 'react-router-dom';
import Layout from './Layout';
import '../styles.css';

export default function Home() {
  return (
    <Layout>
      <header>
        <h1>Explora el Mundo del Buceo</h1>
        <p>Sumérgete en una aventura inolvidable y descubre la belleza del océano.</p>
        <Link to="/reserva" className="cta-btn">Reserva tu experiencia</Link>
      </header>
      <section className="features">
        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/scuba-diving.png" alt="Buceo Seguro" />
          <h2>Buceo Seguro</h2>
          <p>Instructores certificados y equipos de alta calidad para tu tranquilidad.</p>
        </div>
        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/coral.png" alt="Vida Marina" />
          <h2>Vida Marina</h2>
          <p>Descubre arrecifes, peces exóticos y paisajes submarinos impresionantes.</p>
        </div>
        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/underwater-camera.png" alt="Fotografía Submarina" />
          <h2>Fotografía Submarina</h2>
          <p>Llévate recuerdos únicos con nuestras cámaras acuáticas disponibles.</p>
        </div>
      </section>
      <footer>
        &copy; 2024 Mundo Buceo. Todos los derechos reservados.<br />
        <Link to="/login" style={{ color: '#00ffdd' }}>Iniciar sesión</Link>
      </footer>
    </Layout>
  );
}
