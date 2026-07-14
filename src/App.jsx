import { useState } from 'react';
import { Encabezado } from './components/Encabezado';
import { ListaAlumnos } from './components/ListaAlumnos';
import { DetalleAlumno } from './components/DetalleAlumno';
import { FormularioCrear } from './components/FormularioCrear';
import { FormularioEditar } from './components/FormularioEditar';
import './App.css';
 
function App() {
  const [idAlumnoSeleccionado, setIdAlumnoSeleccionado] = useState(null);
  const [alumnoEditar, setAlumnoEditar] = useState(null);
  const [mostrarCrear, setMostrarCrear] = useState(false);
  const [recargar, setRecargar] = useState(0);
 
  const handleGuardado = () => {
    setMostrarCrear(false);
    setAlumnoEditar(null);
    setRecargar((anterior) => anterior + 1);
  };
 
  const handleEditar = (alumno) => {
    setAlumnoEditar(alumno);
    setMostrarCrear(false);
    setIdAlumnoSeleccionado(null);
  };
 
  const handleNuevo = () => {
    setAlumnoEditar(null);
    setMostrarCrear(true);
    setIdAlumnoSeleccionado(null);
  };
 
  const handleCancelar = () => {
    setMostrarCrear(false);
    setAlumnoEditar(null);
  };
 
  const mostrarFormulario = mostrarCrear || alumnoEditar != null;
 
  return (
    <>
      <Encabezado usuarioActivo={'Vic Flores'} />
 
      {!mostrarFormulario && (
        <button onClick={handleNuevo}>+Registar Alumno</button>
      )}
 
      {mostrarCrear && (
        <FormularioCrear
          onGuardado={handleGuardado}
          onCancelar={handleCancelar}
        />
      )}
 
      {alumnoEditar && (
        <FormularioEditar
          alumnoEditar={alumnoEditar}
          onGuardado={handleGuardado}
          onCancelar={handleCancelar}
        />
      )}
 
      {!mostrarFormulario && (
        <ListaAlumnos
          onSeleccionarAlumno={setIdAlumnoSeleccionado}
          onEditar={handleEditar}
          recargar={recargar}
        />
      )}
 
      {idAlumnoSeleccionado && !mostrarFormulario && (
        <DetalleAlumno
          idAlumno={idAlumnoSeleccionado}
          onCerrar={() => setIdAlumnoSeleccionado(null)}
        />
      )}
    </>
  );
}
 
export default App;