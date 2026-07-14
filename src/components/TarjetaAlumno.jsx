import { useState } from 'react';
 
export const TarjetaAlumno = ({
  id,
  nombre,
  apellido,
  grado,
  seccion,
  onSeleccionarAlumno,
  onEditar,
}) => {
  const [matriculaActiva, setMatriculaActiva] = useState(true);
 
  const toggleMatricula = () => setMatriculaActiva((prevState) => !prevState);
 
  return (
    <div>
      <h2>
        Nombre: {nombre} {apellido}
      </h2>
 
      <p>
        Grado: {grado} / Seccion: {seccion}
      </p>
 
      <p>Estado de matricula: {matriculaActiva ? 'Activa' : 'Inactiva'}</p>
 
      <button onClick={toggleMatricula}>
        {matriculaActiva ? 'Desactivar matricula' : 'Activar matricula'}
      </button>
 
      <button onClick={() => onSeleccionarAlumno(id)}>Ver detalle</button>
 
      <button
        onClick={() => onEditar({ id, nombre, apellido, grado, seccion })}
      >
        Editar
      </button>
    </div>
  );
};