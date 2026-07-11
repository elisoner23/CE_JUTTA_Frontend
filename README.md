# CE Jutta Steiner - Sistema de Gestión Escolar (Front-End)

Este repositorio contiene la interfaz de usuario para el **Sistema de Gestión Escolar del Centro Educativo Jutta Steiner**. La aplicación permite la administración, filtrado y seguimiento del estado de matrícula de los alumnos.

Desarrollado con **React**, **Vite** y consumiendo una API REST construida en **Node.js/Express** con persistencia en **PostgreSQL** mediante **Prisma ORM**.

---

## 🚀 Características Principales

* **Listado de Alumnos:** Visualización en tiempo real de los estudiantes registrados en la institución.
* **Filtros Avanzados:** Búsqueda dinámica por nombre y filtrado por grado académico (7°, 8° y 9° grado).
* **Gestión de Matrículas:** Control visual de estados de alumnos (Activa / Inactiva).
* **Diseño Responsivo:** Interfaz limpia adaptada para navegadores modernos utilizando Tailwind CSS / CSS.

---

## 🛠️ Tecnologías Utilizadas

* **Single Page Application (SPA):** React (Hooks: `useState`, `useEffect`)
* **Herramienta de Construcción:** Vite
* **Cliente HTTP:** Axios (con configuración centralizada de encabezados y timeouts)
* **Entorno de Trabajo:** Brave / Chromium DevTools

---

## 🔧 Configuración e Instalación Local

Sigue estos pasos para clonar el proyecto y ejecutarlo en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/elisoner23/CE_JUTTA_Frontend.git](https://github.com/elisoner23/CE_JUTTA_Frontend.git)
cd CE_JUTTA_Frontend

### 2. Instalar dependencias
```bash
npm install

### 3. Variables de Entorno (.env)
```bash
VITE_API_URL=http://localhost:3000/api
VITE_API_KEY=tu_clave_api_secreta

### 4. Levantar el Servidor de Desarrollo
```bash
npm run dev