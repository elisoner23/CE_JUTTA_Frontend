import { useState, useEffect } from 'react';
import { obtenerAlumnoPorId } from '../../services/alumnosService.js';
import styles from './DetalleAlumno.module.css'; // Asegúrate de importar los estilos

export const DetalleAlumno = ({ idAlumno }) => {
  const [alumno, setAlumno] = useState(null);

  useEffect(() => {
    const fetchAlumnoPorId = async () => {
      try {
        const res = await obtenerAlumnoPorId(idAlumno);
        setAlumno(res);
      } catch (error) {
        console.error('Error al obtener un alumno por su id: ', error);
      }
    };

    fetchAlumnoPorId();
  }, [idAlumno]);

  return (
    <div className={styles.tarjetaDetalle}>
      <h2 className={styles.titulo}>Detalle del alumno</h2>

      <p className={styles.filaInfo}>
        <strong>Nombre:</strong> <span>{alumno?.nombre}</span>
      </p>
      
      <p className={styles.filaInfo}>
        <strong>Grado:</strong> <span>{alumno?.grado}</span>
      </p>
      
      <p className={styles.filaInfo}>
        <strong>Sección:</strong> <span>{alumno?.seccion}</span>
      </p>
      
      <button className={styles.btnCerrar} onClick={() => setAlumno(null)}>
        Cerrar detalle
      </button>
      
      {/* Limpieza del float en escritorio */}
      <div style={{ clear: 'both' }}></div>
    </div>
  );
};