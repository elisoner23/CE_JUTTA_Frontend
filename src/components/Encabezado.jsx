export const Encabezado = () => {
  // Creamos la variable que te hacía falta
  const nombreEstudiante = "Erick García"; 

  return (
    <header>
      <h1>CE Jutta Steiner - Sistema de Gestión</h1>
      <p>Usuario Activo: {nombreEstudiante}</p>
    </header>
  );
};