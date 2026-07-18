import styles from './Encabezado.module.css';

export const Encabezado = () => {
  const nombreEstudiante = "Erick García"; 

  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>CE Jutta Steiner - Sistema de Gestión</h1>
      <p className={styles.usuarioInfo}>
        Usuario Activo: <strong>{nombreEstudiante}</strong>
      </p>
    </header>
  );
};