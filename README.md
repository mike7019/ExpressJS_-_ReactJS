# Migración Landing Page Buceo: ReactJS + ExpressJS

Este proyecto es una migración de una landing page de reservas de buceo a una arquitectura moderna con ReactJS (frontend) y ExpressJS (backend).

## Estructura
- **Frontend:** ReactJS + Vite, rutas: Home, Login, Reserva. Validaciones y estilos personalizados.
- **Backend:** ExpressJS, endpoints para login y reserva.

## Uso

### 1. Backend
```bash
node server.js
```
El backend corre en http://localhost:4000

### 2. Frontend
```bash
npm run dev
```
El frontend corre en http://localhost:5173 (o el puerto que indique Vite)

## Funcionalidades
- Login simulado (usuario: usuario@ejemplo.com, contraseña: 1234)
- Formulario de reserva con validación y mensaje de éxito
- Navegación SPA con React Router
- Estilos modernos y responsivos

---

¿Dudas? Consulta los archivos en `/src` y `server.js` para personalizar más.
