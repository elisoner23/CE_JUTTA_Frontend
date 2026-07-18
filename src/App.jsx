import { Routes, Route } from 'react-router-dom';
import { Encabezado } from './components/Encabezado/Encabezado';
import { PaginaListaAlumnos } from './pages/PaginaListaAlumnos/PaginaListaAlumnos';
import { PaginaDetalleAlumno } from './pages/PaginaDetalleAlumno/PaginaDetalleAlumno';
import { PaginaCrearAlumno } from './pages/PaginaCrearAlumno/PaginaCrearAlumno';
import { PaginaEditarAlumno } from './pages/PaginaEditarAlumno/PaginaEditarAlumno';
 
import './App.css';
 
function App() {
  return (
    <>
      <Encabezado usuarioActivo={'Vic Flores'} />
 
      <Routes>
        <Route path='/' element={<PaginaListaAlumnos />} />
 
        <Route path='/alumnos/nuevo' element={<PaginaCrearAlumno />} />
 
        <Route path='/alumnos/:id' element={<PaginaDetalleAlumno />} />
 
        <Route path='/alumnos/:id/editar' element={<PaginaEditarAlumno />} />
      </Routes>
    </>
  );
}
 
export default App;